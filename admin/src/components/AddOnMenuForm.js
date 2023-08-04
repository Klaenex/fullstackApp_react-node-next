import { useState } from "react";
import { createItem, updateItem } from "../utils/apiItem";

const AddOnMenuForm = ({
  selectedCategory,
  handleCloseModal,
  modify,
  setModify,
  categoriesData,
}) => {
  const [form, setForm] = useState({});

  console.log(selectedCategory.options);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!modify) {
      createItem(form);
    } else {
      updateItem(categoriesData._id, form);
      setModify(false);
    }

    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getFormElement = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{modify ? "Modifier" : "Ajouter"}</button>
    </form>
  );
};

export default AddOnMenuForm;
