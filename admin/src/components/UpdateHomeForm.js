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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Votre nom:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={home.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="titleIntro">Titre d'intro: </label>
        <input
          type="text"
          name="titleIntro"
          id="titleIntro"
          placeholder={home.intro.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="textIntro">Texte d'introduction: </label>
        <textarea
          type="text"
          name="textIntro"
          id="textIntro"
          placeholder={home.intro.text}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="titleText">Titre du paragraphe: </label>
        <input
          type="text"
          name="titleText"
          id="natitleTextme"
          placeholder={home.text.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="textParagraph">Texte d'introduction: </label>
        <textarea
          type="text"
          name="textParagraph"
          id="textParagraph"
          placeholder={home.text.text}
          onChange={handleChange}
        />
      </div>
      <button className="button button-form" type="submit">
        Modifier
      </button>
    </form>
  );
};

export default UpdateHomeForm;
