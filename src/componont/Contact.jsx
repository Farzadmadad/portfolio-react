import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <section class="mb-4 ">
        <h2 class="h1-responsive font-weight-bold text-center my-4 section-title">
          Contact us
        </h2>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="8"
                      cols="50"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left">
              <a href="#" className="cta">
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>
        </div>
        <div className="colitem">
          <div>
            <ul>
              <li>
                <p>Nederland</p>
              </li>

              <li>
                <p>+31(0)687640491</p>
              </li>

              <li>
                <p>farzad.madadzade12@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
