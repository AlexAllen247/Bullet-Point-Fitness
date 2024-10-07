const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post("/create-subscription", async (req, res) => {
  const { email, paymentMethodId, priceId } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: email,
    });

    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customer.id,
    });

    await stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent"],
    });

    res.status(200).send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      console.error(
        `⚠️  Webhook signature verification failed: ${err.message}`,
      );
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    switch (event.type) {
      case "invoice.payment_succeeded":
        const invoice = event.data.object;
        break;
      case "invoice.payment_failed":
        const failedInvoice = event.data.object;
        break;
      case "customer.subscription.deleted":
        const subscription = event.data.object;
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send({ received: true });
  },
);

module.exports = router;
