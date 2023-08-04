import React, { useState } from "react";
import { createNewCategory } from "../utils/apiCategory";

const AddCategoryForm = ({ handleCloseModal }) => {
  const [form, setForm] = useState({
    titleCategory: "",
    options: {
      name: { active: false, inputType: "text" },
      desc: { active: false, inputType: "text" },
      enDesc: { active: false, inputType: "text" },
      alcool: { active: false, inputType: "number" },
      price0: { active: false, inputType: "number" },
      price1: { active: false, inputType: "number" },
      price2: { active: false, inputType: "number" },
      bitterness: { active: false, inputType: "number" },
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
        <label for="titleCategory">Titre de la catégorie:</label>
        <input
          type="text"
          id="titleCategory"
          name="titleCategory"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="name">Nom:</label>
        <input type="checkbox" id="name" name="name" onChange={handleChange} />
      </div>
      <div>
        <label for="desc">Description:</label>
        <input type="checkbox" id="desc" name="desc" onChange={handleChange} />
      </div>
      <div>
        <label for="enDesc">Description anglaise:</label>
        <input
          type="checkbox"
          id="enDesc"
          name="enDesc"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="alcool">% d'alcool:</label>
        <input
          type="checkbox"
          id="alcool"
          name="alcool"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="price0">Prix 25cl:</label>
        <input
          type="checkbox"
          id="price0"
          name="price0"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="price1">Prix 33cl:</label>
        <input
          type="checkbox"
          id="price1"
          name="price1"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="price2">Prix 50cl:</label>
        <input
          type="checkbox"
          id="price2"
          name="price2"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="bitterness">Amertume:</label>
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
