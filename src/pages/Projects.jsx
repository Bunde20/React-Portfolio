export default function Projects() {
  return (
    <div class="container">
      <div class="row gy-3 mt-3">
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card h-100" id="project-card">
              <img
                src="src\assets\digital-marketing-meeting.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Marketing Booster</h5>
                <div class="d-flex justify-content-between">
                  <a href="https://github.com/Bunde20/Horiseon-Boosts-Business">
                    Code
                  </a>{' '}
                  <a href="https://bunde20.github.io/Horiseon-Boosts-Business/">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100" id="project-card">
              <img
                src="src\assets\p1-mockup.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body justify-content-between">
                <h5 class="card-title">Explore the Stars</h5>
                <div class="d-flex justify-content-between">
                  <a href="https://github.com/ChrisDeHaan/Team-SCCRM">Code</a>{' '}
                  <a href="https://chrisdehaan.github.io/Team-SCCRM/mars-rover.html">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100" id="project-card">
              <img
                src="src\assets\p2-mockup.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">SCCRM Healthcare</h5>
                <div class="d-flex justify-content-between">
                  <a href="https://github.com/Elrond-Hubbard/Team-SCCRM-2">
                    Code
                  </a>{' '}
                  <a href="https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
