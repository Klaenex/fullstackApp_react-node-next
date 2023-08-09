import { useState } from "react";
import { createItem, updateItem } from "../utils/apiItem";

const AddOnMenuForm = ({
  selectedCategory,
  handleCloseModal,
  modify,
  setModify,
  item,
}) => {
  const [form, setForm] = useState({ categoryId: selectedCategory._id });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!modify) {
      createItem(form);
    } else {
      updateItem(item._id, form);
      setModify(false);
    }
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getFormElements = () => {
    return Object.entries(selectedCategory.options).map(([key, option]) => {
      if (option.active) {
        return (
          <input
            key={key}
            type={option.inputType}
            name={key}
            onChange={handleInputChange}
            value={form[key] || ""}
            placeholder={`Enter ${key}`}
          />
        );
      }
      return null;
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* {getFormElements()} */}
      <label>Nom:</label>
      <input type={selectedCategory.options.name.inputType} />
      <button type="submit">{modify ? "Modifier" : "Ajouter"}</button>
    </form>
  );
};

export default AddOnMenuForm;
