import React, { useEffect, useState } from "react";
import { fetchHome } from "../utils/apiHome";
import UpdateHomeForm from "../components/UpdateHomeForm";
import Modal from "../components/Modal";

const Home = () => {
  const [home, setHome] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchHome()
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setHome]);

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
      <h2>Paramètres de l'accueil</h2>
      {home && (
        <div>
          <div>
            <h3>Votre nom:</h3>
            <p>{home.name}</p>
          </div>
          <div>
            <h3>Introduction</h3>
            <p>{home.intro.title}</p>
            <p>{home.intro.text}</p>
          </div>
          <div>
            <h3>Paragraphe</h3>
            <p>{home.text.title}</p>
            <p>{home.text.text}</p>
          </div>
          <button id="updateHome" onClick={() => openModal()}>
            Modifier votre accueil
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
