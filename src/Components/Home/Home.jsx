import avatar from "../../assets/avatar.svg";

const Home = () => {
  document.title = "Home";
  return (
    <>

      <section className="main-bg vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-5">
            <div className="image ">
              <img src={avatar} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 className="text-white fw-bold fs-1 m-0">START FRAMEWORK</h2>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div className="line"></div>
              <div><i class="fa-solid fa-star text-white"></i></div>
              <div className="line"></div>
            </div>
            <div className="text-white text-center">Graphic Artist - Web Designer - Illustrator</div>
            </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
