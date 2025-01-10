const About = () => {
  document.title = "About";
  return (
    <>
      <section className=" vh-100 main-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <h2 className="text-white fw-bold fs-1 m-0">ABOUT COMPONENT</h2>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <div className="line"></div>
                <div>
                  <i class="fa-solid fa-star text-white"></i>
                </div>
                <div className="line"></div>
              </div>
              <div className="row px-5 text-white">
                <div className="col-md-6 ps-md-5">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-md-6 pe-5">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
