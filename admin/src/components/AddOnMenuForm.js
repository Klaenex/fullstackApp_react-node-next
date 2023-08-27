import { useState } from "react";
import {
  createItem,
  updateItem,
  getAllItemsByCategory,
} from "../utils/apiItem";

const AddOnMenuForm = ({
  selectedCategory,
  handleCloseModal,
  modify,
  setModify,
  item,
  setItemsList,
}) => {
  const [form, setForm] = useState({
    categoryId: selectedCategory._id,
    ...(modify ? item : {}),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!modify) {
      createItem(form);
    } else {
      updateItem(item._id, form);
      setModify(false);
    }
    getAllItemsByCategory(selectedCategory._id).then((data) => {
      console.log(setItemsList);
      setItemsList(data);
    });
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
          <div key={key}>
            <label htmlFor={key}>{option.label}</label>
            <input
              type={option.inputType}
              name={key}
              onChange={handleInputChange}
              value={form[key] || ""}
              placeholder={`Enter ${key}`}
            />
          </div>
        );
      }
      return null;
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {getFormElements()}
      <button type="submit" className="button button-form">
        {modify ? "Modifier" : "Ajouter au menu"}
      </button>
    </form>
  );
};

export default AddOnMenuForm;
