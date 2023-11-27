export default function Projects() {
  return (
    <div class="container">
      <div class="row gy-3 mt-3">
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card" id="project-card">
              <img
                src="assets/digital-marketing-meeting.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body front"></div>
              <div class="card-body justify-content-between back">
                <h2 class="card-title d-flex flex-wrap justify-content-center align-items-center py-2 fixed-top">
                  Horiseon Marketing
                </h2>
                <p class="card-text">
                  <h5>
                    <p>
                      This project was designed to showcase a polished website with static HTML
                      and CSS optimized for SEO and accessibility. Links at the top allow the user 
                      to navigate the different sections of the page.{' '}
                    </p>
                  </h5>
                </p>
                <div class="d-flex justify-content-between m-3 mb-1 fixed-bottom">
                  <a href="https://github.com/Bunde20/Horiseon-Boosts-Business" target="_blank">
                    <h3>Code</h3>
                  </a>{' '}
                  <a href="https://bunde20.github.io/Horiseon-Boosts-Business/" target="_blank">
                    <h3>Website</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card" id="project-card">
              <img
                src="assets/p1-mockup.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body front"></div>
              <div class="card-body justify-content-between back">
                <h2 class="card-title d-flex flex-wrap justify-content-center align-items-center py-2 fixed-top">
                  Explore the Stars
                </h2>
                <p class="card-text">
                  <h5>
                    <p>
                      This project was developed to allow users to browse
                      thousands of images taken by NASA to using API calls to satisfy cosmic
                      curiosity. The site uses jQuery to simplify DOM traversal
                      and event handling. Users can search for images taken on
                      specific dates in a rover's mission, and even filter the
                      results based on which on-board camera took the photo.{' '}
                    </p>
                  </h5>
                </p>
                <div class="d-flex justify-content-between m-3 mb-1 fixed-bottom">
                  <a href="https://github.com/ChrisDeHaan/Team-SCCRM" target="_blank">
                    <h3>Code</h3>
                  </a>{' '}
                  <a href="https://chrisdehaan.github.io/Team-SCCRM/mars-rover.html" target="_blank">
                    <h3>Website</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card" id="project-card">
              <img
                src="assets/p2-mockup.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body front"></div>
              <div class="card-body justify-content-between back">
                <h2 class="card-title d-flex flex-wrap justify-content-center align-items-center py-2 fixed-top">
                  SCCRM Healthcare
                </h2>
                <p class="card-text">
                  <h5>
                    <p>
                      The SCCRM Healthcare app is focused on real-time display
                      of hospital patient vitals data. The site includes SMS
                      alert functionality and a dynamic pulse-oximetry display.{' '}
                    </p>
                    <p>Login: 1111, Password: 1</p>
                    <p>Use the /patsim endpoint to manipulate vitals.</p>
                  </h5>
                </p>
                <div class="d-flex justify-content-between m-3 mb-1 fixed-bottom">
                  <a href="https://github.com/Elrond-Hubbard/Team-SCCRM-2" target="_blank">
                    <h3>Code</h3>
                  </a>{' '}
                  <a href="https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/" target="_blank">
                    <h3>Website</h3>
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
