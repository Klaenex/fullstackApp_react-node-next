import React, { useState } from "react";
import { updateHome } from "../utils/apiHome";

const UpdateHomeForm = ({ home, setHome, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    name: home.name,
    titleIntro: home.intro.title,
    textIntro: home.intro.text,
    titleText: home.text.title,
    textParagraph: home.text.text,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      name: formData.name,
      intro: {
        title: formData.titleIntro,
        text: formData.textIntro,
      },
      text: {
        title: formData.titleText,
        text: formData.textParagraph,
      },
      galery: "",
    };

    updateHome(formattedData)
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error(error);
      });

    handleCloseModal();
  };

  return (
    <>
      <h2 className="title title-form">Modifier votre accueil</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="wrapper wrapper-formPart">
          <label htmlFor="name" className="label label-title">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder={home.name || "Nom de votre entreprise:"}
            onChange={handleChange}
          />
        </div>
        <div className="wrapper wrapper-formPart">
          <label htmlFor="titleIntro" className="label label-title">
            Introduction
          </label>
          <input
            type="text"
            name="titleIntro"
            id="titleIntro"
            className="input"
            placeholder={home.intro.title}
            onChange={handleChange}
          />

          <textarea
            type="text"
            name="textIntro"
            id="textIntro"
            className="input input-textarea"
            placeholder={home.intro.text}
            onChange={handleChange}
          />
        </div>
        <div className="wrapper wrapper-formPart">
          <label htmlFor="titleText" className="label label-title">
            Paragraphe
          </label>
          <input
            type="text"
            name="titleText"
            id="titleText"
            className="input"
            placeholder={home.text.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="textParagraph"
            id="textParagraph"
            className="input input-textarea"
            placeholder={home.text.text || ""}
            onChange={handleChange}
          />
        </div>
        <button className="button button-form" type="submit">
          Modifier
        </button>
      </form>
    </>
  );
};

export default UpdateHomeForm;
