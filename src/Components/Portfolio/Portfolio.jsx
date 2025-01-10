import React, { useState } from "react";
import cake from "../../assets/cake.png";
import house from "../../assets/house.png";
import tent from "../../assets/tent.png";
import "./Portfolio.css";

const Portfolio = () => {
  document.title = "Portfolio";
  const [modalData, setModalData] = useState({ src: "", visible: false });

  const images = [
    { src: house, alt: "House Image 1" },
    { src: cake, alt: "Cake Image 1" },
    { src: tent, alt: "Tent Image 1" },
    { src: house, alt: "House Image 2" },
    { src: cake, alt: "Cake Image 2" },
    { src: tent, alt: "Tent Image 2" },
  ];

  function showModal(src) {
    setModalData({ src, visible: true });
  }

  function hideModal() {
    setModalData({ src: "", visible: false });
  }

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div>
            <h2 className="fw-bold fs-1 m-0 text-color text-uppercase text-center">
              Portfolio Component
            </h2>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <div className="s-line"></div>
              <div>
                <i className="fa-solid fa-star text-color"></i>
              </div>
              <div className="s-line"></div>
            </div>
          </div>
          <div className="row g-5 cards ">
            {images.map((image, index) => (
              <div key={index} className="col-md-6 col-lg-4 rounded-3">
                <div className="rounded-3 position-relative">
                  <img
                    className="w-100 rounded-3 card-img"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div
                    onClick={() => showModal(image.src)}
                    className="layer rounded-3 position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {modalData.visible && (
        <div
          onClick={hideModal}
          className="modal-layer position-fixed top-0 bottom-0 start-0 end-0 bg-black bg-opacity-25 d-flex justify-content-center align-items-center"
        >
          <img
            src={modalData.src}
            alt="Selected Item"
            className="rounded-3"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
