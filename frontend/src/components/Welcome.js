import React from "react";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to BulletPoint Fitness</h1>
        <p className="welcome-description">
          Your Journey to a Healthier and Fitter You Starts Here!
        </p>
        <div className="welcome-cta">
          <p className="cta-text">
            Are you ready to take control of your health and fitness?
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="welcome-features">
          <div className="feature-item">
            <img src="/images/icon-nutrition.png" alt="Nutrition Icon" />
            <h2>Nutrition</h2>
            <p>
              Discover the secrets of a balanced diet and how to fuel your body
              for optimal performance.
            </p>
          </div>
          <div className="feature-item">
            <img src="/images/icon-workouts.png" alt="Workouts Icon" />
            <h2>Workouts</h2>
            <p>
              Access a wide range of workout routines, from beginners to
              advanced, designed to help you achieve your fitness goals.
            </p>
          </div>
          <div className="feature-item">
            <img src="/images/icon-wellness.png" alt="Wellness Icon" />
            <h2>Wellness</h2>
            <p>
              Learn about the importance of self-care and mental well-being in
              maintaining a healthy lifestyle.
            </p>
          </div>
        </div>
        <p className="welcome-bottom">
          At BulletPoint Fitness, we believe that everyone deserves to lead a
          healthy and fulfilling life. Our mission is to provide you with the
          knowledge, tools, and support you need to achieve your health and
          fitness goals. Whether you're just starting your fitness journey or
          looking to take it to the next level, we're here to guide you every
          step of the way.
        </p>
        {/* This is the way to create embedded videos of youtube shorts, also need to create cards structure for each section */}
        <iframe
          width="315"
          height="560"
          src="https://youtube.com/embed/"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div></div>
      </div>
    </section>
  );
};

export default Welcome;
