const Contact = () => {
  document.title = "Contact";
  return (
    <>
      <section className="vh-100">
        <div className="container">
          <div>
            <h2 className=" fw-bold fs-1 m-0 text-color text-uppercase text-center">
              contact section
            </h2>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <div className="s-line"></div>
              <div>
                <i class="fa-solid fa-star text-color"></i>
              </div>
              <div className="s-line"></div>
            </div>
          </div>
          <div className="row">
            <div className="form  mx-auto mt-5 col-lg-8">
              <input
                type="text"
                placeholder="userName"
                className="form-control  my-4 border-0 border-bottom"
              />
              <input
                type="text"
                placeholder="userAge"
                className="form-control  my-4 border-0 border-bottom"
              />
              <input
                type="text"
                placeholder="userEmail"
                className="form-control  my-4 border-0 border-bottom"
              />
              <input
                type="text"
                placeholder="userPassword"
                className="form-control  mt-4 border-0 border-bottom"
              />
              <button className="btn mt-4 main-bg text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
