export default function Resume() {
  return (
    <div className="container-fluid col-6">
      <h2>Technical Skills</h2>
      <p>
        JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
        Express, React, Node, Handlebars, jQuery, Bootstrap, Graphql, Apollo
      </p>

      <h2 className="mb-10">Education</h2>

      <h5>Full Stack Web Development {`(Certificate)`}</h5>
      <p>University of Central Florida | Orlando, FL | 2023</p>

      <h5>Exercise Science {`(B.S.)`}</h5>
      <p>Florida Gulf Coast University | Fort Myers, FL | 2018</p>
      <h2>Work Experience</h2>
      <h5>Orangetheory Fitness {`(2020-Present)`}</h5>
      <p>
        As a head coach I have supervised staff, aided in development, managed inventory, and executed company-wide decisions
        in a fast-paced environment designed for client satisfaction.{' '}
      </p>
      <a
        className="fs-5"
        href="src/assets/Steven-Bunde-Resume.pdf"
        download="steven-bunde-resume"
      >
        Download full resume
      </a>
    </div>
  );
}
