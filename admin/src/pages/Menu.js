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

  //items
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
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
  }, [item, modify]);

  const changeCategory = async (event) => {
    var id = event.target.value;
    fetchCategoryById(id).then((data) => {
      setSelectedCategory(data);
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
              item={item}
            />
          )}
        </Modal>
      )}

      <h2>Paramètres de votre menu</h2>

      {categories.length > 0 && (
        <>
          <label htmlFor="addCategory">Ajouter une categorie: </label>
          <button id="addCategory" onClick={() => openModal("addCategory")}>
            Ajouter
          </button>
          <label htmlFor="category">Choisir une categorie: </label>

          <select
            name="category"
            id="category"
            value={selectedCategory ? selectedCategory._id : ""}
            onChange={changeCategory}
          >
            <option value="">Choisir une categorie</option>
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
            Ajouter au menu
          </button>

          {selectedCategory && (
            <CategoryItemList
              openModal={openModal}
              setItem={setItem}
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
