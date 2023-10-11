import React from "react";

const Disclaimer = () => {
  const styles = {
    section: {
      margin: "auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#df0000",
    },
  };
  return (
    <section className="disclaimer" style={styles.section}>
      <h3>Disclaimer</h3>
      <p>
        As with all diet and fitness programs, consulting a Doctor or medical
        professional before starting is always recommended. The information on
        the Bullet Point Fitness site is for informative purposes only, and is
        not intended or implied to be a substitute for professional medical
        advice, diagnosis or treatment. All content, including text, graphics,
        images and information, contained on or available through this web site
        is for general information purposes only. This site is to help people
        reach attainable goals through lifestyle changes. Bullet Point Fitness
        makes no representation and assumes no responsibility for the accuracy
        of information contained on or available through this web site, and such
        information is subject to change without notice. You are encouraged to
        confirm any information obtained from or through this web site with
        other sources, and review all information regarding any MEDICAL
        condition or treatment with your Doctor. NEVER DISREGARD ANY
        PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL TREATMENT BECAUSE
        OF SOMETHING YOU HAVE READ OR ACCESSED THROUGHOUT THIS WEBSITE. No
        health or medical claims are made for this lifestyle change program.
        Bullet Point Fitness does not warrant, lead, guide or in any way want
        you to believe or expect that the nutritional and fitness information
        presented on this web site will: cure, heal, or correct any illness,
        metabolic disorder, or medical condition. Bullet Point Fitness does not
        recommend, endorse or make any representation about the efficacy,
        appropriateness, or suitability of any specific tests, products,
        procedures, treatments, services, opinions or other information that may
        be contained or available through this web site. BULLET POINT FITNESS IS
        NOT RESPONSIBLE NOR LIABLE FOR ANY ADVICE, COURSE OF TREATMENT,
        DIAGNOSIS OR ANY OTHER INFORMATION, SERVICES OR PRODUCTS THAT YOU OBTAIN
        THROUGH THIS WEBSITE. By using these diets and fitness guidelines, you
        agree that you have read the above medical disclosure, you agree, and
        you will hold harmless the authors, contributors and publishers, and
        they shall have neither liability nor responsibility to any person or
        entity with respect to any of the information contained on this website.
        You (the user) will assume all risk for injury, loss or damage caused or
        alleged to be caused, directly or indirectly by using any information
        described on this web site.
      </p>
    </section>
  );
};

export default Disclaimer;
