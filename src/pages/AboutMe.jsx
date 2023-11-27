import React from 'react';

export default function AboutMe() {
  return (
    <div className="container">
      <h1 className="text-center">About Me</h1>
      <div className="row">
        <div className="col-md-9">
          <p>
            Dedicated and results-oriented professional with a proven background
            in customer service, adept problem-solving skills, and a rich
            history in the strength and conditioning industry. My journey began
            in customer-centric roles where I honed my ability to understand and
            exceed client expectations. My commitment to delivering exceptional
            service has equipped me with strong interpersonal skills and a keen
            understanding of user needs.
          </p>

          <p>
            In addition to my customer service experience, I bring a unique
            perspective from the strength and conditioning industry. Having
            navigated the dynamic and competitive landscape of fitness, I
            developed resilience, adaptability, and a passion for continuous
            improvement. These qualities seamlessly translate into my current
            role as a full-stack web developer.
          </p>

          <p>
            As a developer, I approach challenges with the same determination
            and precision that characterized my work in customer service and the
            fitness industry. I leverage my problem-solving abilities to create
            efficient and user-friendly web solutions. My diverse background
            equips me with a holistic understanding of client requirements,
            enabling me to develop applications that not only meet technical
            standards but also align with user expectations.
          </p>

          <p>
            I am excited about the intersection of my experiences, merging the
            discipline of customer service, the resilience from the strength and
            conditioning industry, and the technical process of a full-stack web
            developer. This unique blend positions me as a well-rounded
            professional ready to contribute effectively to dynamic and
            collaborative projects.
          </p>
        </div>

        <div className="col-md-3">
          <img
            src="./src/assets/Steven.png"
            className="img-fluid"
            alt="Steven"
          />
        </div>
      </div>
    </div>
  );
}
