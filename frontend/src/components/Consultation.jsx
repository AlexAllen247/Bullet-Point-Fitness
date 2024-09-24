import React from "react";
import BulletPointSVG from "./BulletPointSVG";
import SEO from "./SEO";

const GoogleCalendar = () => {
  const styles = {
    consultation: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
    paragraph: {
      color: "#df0000",
      fontSize: 20,
      margin: 30,
    },
  };
  return (
    <section style={styles.consultation}>
      <SEO
        title="Consultation | Bullet Point Fitness"
        description="Schedule a consultation with our fitness experts to create a personalized workout plan tailored to your goals and schedule."
        keywords="consultation, personalized workout plan, fitness experts, personal training, fitness consultation"
        canonicalUrl="https://bulletpointfitness.com/consultation"
        ogImage="https://bulletpointfitness.com/og-image.png"
      />
      <div>
        <h1 style={styles.header}>Book a Consultation</h1>
        <p style={styles.paragraph}>
          <BulletPointSVG />
          Starting your fitness journey or taking it to the next level can be
          challenging, but you don't need to do it alone. If you're looking for
          guidance, whether it's figuring out where to begin or how to push
          forward, I'm here to help. Book a one-on-one consultation with me, and
          together we'll discuss your goals and craft a personalized fitness
          plan tailored just for you. Choose a timeslot below, and let's start
          this journey towards achieving your fitness aspirations.
        </p>
      </div>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ37BikZEr6aVFFN9J0FZfM7xAbcDq4QGXc5RIUcVL0p_TOHJaKyRRRgVb1_2Mv39fuW2UEbnqhs?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="800"
        frameBorder="0"
        title="Google Calendar"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default GoogleCalendar;
