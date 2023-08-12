import { useState } from "react"; // Assurez-vous d'importer useState
import { updateHome } from "../utils/apiHome";

const ModifyHomeForm = ({ home, setHome }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateHome()
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error(error);
      });
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
      <button type="submit">Modifier</button>
    </form>
  );
};

export default ModifyHomeForm;
