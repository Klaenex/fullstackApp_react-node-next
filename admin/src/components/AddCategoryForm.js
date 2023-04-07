import { useState } from "react";
import axios from "axios";
const AddCategoryForm = () => {
  const [form, setForm] = useState({
    titleCategory: "",
    options: {
      title: false,
      desc: false,
      enDesc: false,
      alcool: false,
      price0: false,
      price1: false,
      price2: false,
      bitterness: false,
    },
  });
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (name === "titleCategory") {
      setForm(Object.assign({}, form, { titleCategory: value }));
    } else {
      setForm(
        Object.assign({}, form, {
          options: Object.assign({}, form.options, {
            [name]: type === "checkbox" ? checked : value,
          }),
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("/api/category", form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom de la catégorie:
        <input
          type="text"
          name="titleCategory"
          value={form.titleCategory}
          onChange={handleChange}
        />
      </label>
      <label>
        Titre:
        <input
          type="checkbox"
          name="title"
          checked={form.options.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="checkbox"
          name="desc"
          checked={form.options.desc}
          onChange={handleChange}
        />
      </label>
      <label>
        Description anglaise:
        <input
          type="checkbox"
          name="enDesc"
          checked={form.options.enDesc}
          onChange={handleChange}
        />
      </label>
      <label>
        Alcool:
        <input
          type="checkbox"
          name="alcool"
          checked={form.options.alcool}
          onChange={handleChange}
        />
      </label>
      <label>
        Prix:
        <input
          type="checkbox"
          name="price0"
          checked={form.options.price0}
          onChange={handleChange}
        />
      </label>
      <label>
        Prix:
        <input
          type="checkbox"
          name="price1"
          checked={form.options.price1}
          onChange={handleChange}
        />
      </label>
      <label>
        Prix:
        <input
          type="checkbox"
          name="price2"
          checked={form.options.price2}
          onChange={handleChange}
        />
      </label>
      <label>
        Amertume:
        <input
          type="checkbox"
          name="bitterness"
          checked={form.options.bitterness}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddCategoryForm;
