import { useState } from "react";
import axios from "axios";

const AddOnMenuForm = ({ data, handleCloseModal, id }) => {
  const [form, setForm] = useState({ categoryId: id });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/item", form);
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getFormElement = ([key, value]) => {
    if (key.startsWith("price") && value) {
      return (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input
            type="number"
            inputMode="decimal"
            id={key}
            name={key}
            onChange={handleInputChange}
          />
        </div>
      );
    } else if (key.startsWith("alcool") && value) {
      return (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input
            type="number"
            inputMode="decimal"
            id={key}
            name={key}
            onChange={handleInputChange}
          />
        </div>
      );
    } else if (
      key.startsWith("bitterness") &&
      typeof value === "boolean" &&
      value
    ) {
      return (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input
            type="range"
            inputMode="numeric"
            id={key}
            name={key}
            min="0"
            max="10"
            step="1"
            onChange={handleInputChange}
          />
        </div>
      );
    } else if (typeof value === "boolean" && value) {
      return (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input type="text" id={key} name={key} onChange={handleInputChange} />
        </div>
      );
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(data).map(getFormElement)}
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddOnMenuForm;
