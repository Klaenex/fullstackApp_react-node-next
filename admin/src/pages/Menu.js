import React, { useEffect, useState } from "react";

import Modal from "../components/Modal";
import AddCategoryForm from "../components/AddCategoryForm";
import AddOnMenuForm from "../components/AddOnMenuForm";
import CategoryItemList from "../components/CategoryItemList";
import { fetchCategories, fetchCategoryById } from "../utils/apiCategory";
import { getAllItemsByCategory } from "../utils/apiItem";
const Menu = () => {
  // category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  //items
  const [items, setItems] = useState([]);
  // modal
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");
  //modify form
  const [modify, setModify] = useState(false);

  const getCategory = () => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCategory();
  }, [categoriesData, modify]);

  const changeCategory = async (event) => {
    var id = event.target.value;
    fetchCategoryById(id).then((data) => {
      setSelectedCategory(data);
      console.log(id);
      getAllItemsByCategory(id).then((data) => {
        setItems(data);
      });
    });
  };
  const openModal = (form) => {
    setFormType(form);
    setShowModal(true);
  };

  const handleCloseModal = async () => {
    setShowModal(false);
    if (formType === "addCategory") {
      getCategory();
    } else if (formType === "addOnMenu") {
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
              selectedCategory={selectedCategory}
            />
          )}
          {formType === "ChangeOnMenu" && selectedCategory && (
            <AddOnMenuForm
              handleCloseModal={handleCloseModal}
              selectedCategory={selectedCategory}
              modify={modify}
              setModify={setModify}
              categoriesData={categoriesData}
            />
          )}
        </Modal>
      )}

      <h2>Menu</h2>

      {categories.length > 0 && (
        <>
          <label htmlFor="addCategory">Add a category:</label>
          <button id="addCategory" onClick={() => openModal("addCategory")}>
            Add category
          </button>
          <label htmlFor="category">Choose a category:</label>

          <select
            name="category"
            id="category"
            value={selectedCategory ? selectedCategory._id : ""}
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
            disabled={!selectedCategory}
          >
            Add on menu
          </button>

          {selectedCategory && (
            <CategoryItemList
              openModal={openModal}
              setCategoriesData={setCategoriesData}
              setModify={setModify}
              items={items}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Menu;
