import React from 'react'
import "./Main.css";

function About() {
  return (
    <div>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>Our Studio</span>
            <h2>Our Studio</h2>
            <p>Patrick's studio where we transform reality into photos</p>
          </div>

          <div class="row">
            <div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div class="col-lg-8 d-flex flex-column align-items-stretch">
              <div class="content ps-lg-4 d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Name:</strong> <span>Patrick studio</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>0713 456 890</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Nairobi, Kenya</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6"></div>
                </div>
                <div class="row mt-n4">
                  <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <span
                        class="bi bi-emoji-smile"
                        style={{ color: "#20b38e" }}
                      >
                        {"   "}20
                      </span>
                      <p>
                        <strong>Happy Users</strong>
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <span class="bi bi-journals" style={{ color: "#8a1ac2" }}>
                        {"   "}60
                      </span>
                      <strong>Successful Projects</strong>
                    </div>
                  </div>

                  <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <span class="bi bi-clock" style={{ color: "#2cbdee" }}>
                        {"   "} 4
                      </span>
                      <p>
                        <strong>Years of experience</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About