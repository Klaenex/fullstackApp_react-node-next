import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import AddCategoryForm from "../components/AddCategoryForm";
import AddOnMenuForm from "../components/AddOnMenuForm";
import CategoryItemList from "../components/CategoryItemList";

const Menu = () => {
  //category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  //modal
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");

  async function fetchCategories() {
    try {
      const response = await axios.get("/api/category");
      if (response.status === 200) {
        const json = response.data;
        setCategories(json);
        console.log(json);
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  const changeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const openModal = (form) => {
    setFormType(form);
    setShowModal(true);
  };
  const handleCloseModal = async () => {
    setShowModal(false);
    await fetchCategories();
  };
  return (
    <div className="menu">
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          {formType === "addCategory" && (
            <AddCategoryForm handleCloseModal={handleCloseModal} />
          )}
          {formType === "addOnMenu" && (
            <AddOnMenuForm
              handleCloseModal={handleCloseModal}
              category={selectedCategory}
            />
          )}
        </Modal>
      )}
      <h2>Menu</h2>
      <label htmlFor="addCategory">Add a category:</label>
      <button id="addCategory" onClick={() => openModal("addCategory")}>
        Add category
      </button>
      <label htmlFor="category">Choose a category:</label>

      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={changeCategory}
      >
        <option value="">Choose a category</option>
        {categories &&
          categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.titleCategory}
            </option>
          ))}
      </select>
      <button
        id="addOnMenu"
        onClick={() => openModal("addOnMenu")}
        disabled={!selectedCategory}
      >
        Add on menu
      </button>
      {selectedCategory && (
        <CategoryItemList handleCategory={selectedCategory} />
      )}
    </div>
  );
};
export default Menu;
