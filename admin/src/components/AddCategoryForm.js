import React, { useState } from "react";
import { createNewCategory } from "../utils/apiCategory";

const AddCategoryForm = ({ handleCloseModal }) => {
  const [form, setForm] = useState({
    titleCategory: "",
    typeOfCategory: "",
    options: {
      name: { active: false, inputType: "text", label: "Nom: " },
      desc: { active: false, inputType: "text", label: "Description: " },
      enDesc: {
        active: false,
        inputType: "text",
        label: "Description en anglais: ",
      },
      alcool: { active: false, inputType: "number", label: "% d'alcool: " },
      price0: { active: false, inputType: "number", label: "Prix 25cl: " },
      price1: { active: false, inputType: "number", label: "Prix 33cl: " },
      price2: { active: false, inputType: "number", label: "Prix 50cl: " },
      bitterness: { active: false, inputType: "number", label: "Amertume: " },
    },
  });

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    if (name === "titleCategory") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({
        ...form,
        options: {
          ...form.options,
          [name]: {
            ...form.options[name],
            active: type === "checkbox" ? checked : form.options[name].active,
          },
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createNewCategory(form)
      .then(() => {
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titleCategory">Titre de la catégorie:</label>
        <input
          type="text"
          id="titleCategory"
          name="titleCategory"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="typeOfCategory">Type de categorie: </label>
        <select>
          <option>Nouriture</option>
          <option>Boisson</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Nom:</label>
        <input type="checkbox" id="name" name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="desc">Description:</label>
        <input type="checkbox" id="desc" name="desc" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="enDesc">Description anglaise:</label>
        <input
          type="checkbox"
          id="enDesc"
          name="enDesc"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="alcool">% d'alcool:</label>
        <input
          type="checkbox"
          id="alcool"
          name="alcool"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price0">Prix 25cl:</label>
        <input
          type="checkbox"
          id="price0"
          name="price0"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price1">Prix 33cl:</label>
        <input
          type="checkbox"
          id="price1"
          name="price1"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price2">Prix 50cl:</label>
        <input
          type="checkbox"
          id="price2"
          name="price2"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bitterness">Amertume:</label>
        <input
          type="checkbox"
          id="bitterness"
          name="bitterness"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddCategoryForm;
