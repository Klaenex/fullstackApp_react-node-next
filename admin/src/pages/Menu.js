import React, { useEffect, useState } from "react";

import Modal from "../components/Modal";
import AddCategoryForm from "../components/AddCategoryForm";
import AddOnMenuForm from "../components/AddOnMenuForm";
import CategoryItemList from "../components/CategoryItemList";
import { fetchCategories, fetchCategoryById } from "../utils/apiCategory";
const Menu = () => {
  // category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  // modal
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const changeCategory = async (event) => {
    var id = event.target.value;
    fetchCategoryById(id).then((data) => {
      setSelectedCategory(data);
    });
  };

  const openModal = (form) => {
    setFormType(form);
    setShowModal(true);
  };

  const handleCloseModal = async () => {
    setShowModal(false);
    if (formType === "addCategory") {
      await fetchCategories();
    }
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
              data={selectedCategory.options}
              id={selectedCategory._id}
            />
          )}
        </Modal>
      )}

      <h2>Menu</h2>

      {categories && categories.length > 0 && (
        <>
          <label htmlFor="addCategory">Add a category:</label>
          <button id="addCategory" onClick={() => openModal("addCategory")}>
            Add category
          </button>
          <label htmlFor="category">Choose a category:</label>

          <select
            name="category"
            id="category"
            value={selectedCategory._id}
            onChange={changeCategory}
          >
            <option value="">Choose a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.titleCategory}
              </option>
            ))}
          </select>
          <button
            id="addOnMenu"
            onClick={() => openModal("addOnMenu")}
            disabled={!selectedCategory._id}
          >
            Add on menu
          </button>
          {selectedCategory && (
            <CategoryItemList handleCategory={selectedCategory._id} />
          )}
        </>
      )}
    </div>
  );
};

export default Menu;
