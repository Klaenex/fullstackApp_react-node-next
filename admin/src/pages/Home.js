import React, { useState } from "react";
import UpdateHomeForm from "../components/UpdateHomeForm";
import Modal from "../components/Modal";

const Home = ({ home, setHome }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = async () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <UpdateHomeForm
            home={home}
            setHome={setHome}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
      <h2 className="title">Paramètres de l'accueil</h2>
      {home && (
        <section className="section">
          <button
            id="updateHome"
            className="button button-top"
            onClick={() => openModal()}
          >
            Modifier votre accueil
          </button>

          <div className="wrapper wrapper-home">
            <h3 className="title title-litle">Introduction</h3>
            <p>{home.intro.title}</p>
            <p>{home.intro.text}</p>
          </div>
          <div className="wrapper wrapper-home">
            <h3 className="title title-litle">Paragraphe</h3>
            <p>{home.text.title}</p>
            <p>{home.text.text}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
