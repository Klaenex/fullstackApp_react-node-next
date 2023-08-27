import React, { useState, useEffect } from "react";
import { createNewCategory } from "../utils/apiCategory";

const AddCategoryForm = ({ handleCloseModal }) => {
  const [form, setForm] = useState({
    titleCategory: "",
    typeOfCategory: "drink",
    options: {
      name: { active: false, inputType: "text", label: ": Nom" },
      desc: { active: false, inputType: "text", label: ": Description" },
      enDesc: {
        active: false,
        inputType: "text",
        label: ": Description en anglais",
      },
      alcool: { active: false, inputType: "number", label: ": % d'alcool" },
      price0: { active: false, inputType: "number", label: "" },
      price1: { active: false, inputType: "number", label: "" },
      price2: { active: false, inputType: "number", label: ": Prix 50cl" },
      bitterness: { active: false, inputType: "number", label: ": Amertume" },
    },
  });

  useEffect(() => {
    setForm((prevForm) => {
      if (prevForm.typeOfCategory === "drink") {
        return {
          ...prevForm,
          options: {
            ...prevForm.options,
            price0: {
              ...prevForm.options.price0,
              label: " :Prix 25cl",
            },
            price1: {
              ...prevForm.options.price1,
              label: " :Prix 33cl",
            },
          },
        };
      } else {
        return {
          ...prevForm,
          options: {
            ...prevForm.options,
            price0: {
              ...prevForm.options.price0,
              label: " :Prix entrée",
            },
            price1: {
              ...prevForm.options.price1,
              label: " :Prix plat",
            },
          },
        };
      }
    });
  }, [form.typeOfCategory]);

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    console.log(form.typeOfCategory);
    if (name === "titleCategory" || name === "typeOfCategory") {
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
    createNewCategory(form)
      .then(() => {
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h2 className="title title-form">Ajouter une catégorie</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="titleCategory"
            name="titleCategory"
            className="input"
            placeholder="Nom de la catégorie:"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="typeOfCategory">Type de categorie: </label>
          <select
            name="typeOfCategory"
            className="input input-select input-select_form"
            id="typeOfCategory"
            onChange={handleChange}
          >
            <option value="drink">Boisson</option>
            <option value="food">Nouriture</option>
          </select>
        </div>

        <label htmlFor="titleIntro" className="label label-title">
          Paramètres
        </label>
        <ul className="list list-parameter">
          <li>
            <input
              type="checkbox"
              id="name"
              name="name"
              onChange={handleChange}
            />
            <label htmlFor="name">{form.options.name.label}</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="desc"
              name="desc"
              onChange={handleChange}
            />
            <label htmlFor="desc">{form.options.desc.label}:</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="enDesc"
              name="enDesc"
              onChange={handleChange}
            />
            <label htmlFor="enDesc">{form.options.enDesc.label}</label>
          </li>
          {form.typeOfCategory === "drink" && (
            <li>
              <input
                type="checkbox"
                id="alcool"
                name="alcool"
                onChange={handleChange}
              />
              <label htmlFor="alcool">{form.options.alcool.label}</label>
            </li>
          )}
          <li>
            <input
              type="checkbox"
              id="price0"
              name="price0"
              onChange={handleChange}
            />
            <label htmlFor="price0">{form.options.price0.label}</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="price1"
              name="price1"
              onChange={handleChange}
            />
            <label htmlFor="price1">{form.options.price1.label}</label>
          </li>
          {form.typeOfCategory === "drink" && (
            <>
              <li>
                <input
                  type="checkbox"
                  id="price2"
                  name="price2"
                  onChange={handleChange}
                />
                <label htmlFor="price2">{form.options.price2.label}</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="bitterness"
                  name="bitterness"
                  onChange={handleChange}
                />
                <label htmlFor="bitterness">
                  {form.options.bitterness.label}
                </label>
              </li>
            </>
          )}
        </ul>

        <button type="submit" className="button button-form">
          Ajouter la catégorie
        </button>
      </form>
    </>
  );
};

export default AddCategoryForm;
