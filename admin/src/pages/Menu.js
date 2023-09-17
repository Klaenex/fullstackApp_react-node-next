import React, { useEffect, useState } from "react";

import Modal from "../components/Modal";
import AddCategoryForm from "../components/AddCategoryForm";
import AddOnMenuForm from "../components/AddOnMenuForm";
import CategoryItemList from "../components/CategoryItemList";
import { fetchCategories, fetchCategoryById } from "../utils/apiCategory";
import { getAllItemsByCategory, deleteItem } from "../utils/apiItem";

import Plus from "../components/svg/Plus";
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

  const delItem = (id) => {
    deleteItem(id).then(() => {
      const updatedItems = items.filter((item) => item._id !== id);
      setItems(updatedItems);
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
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          {formType === "addCategory" && (
            <AddCategoryForm handleCloseModal={handleCloseModal} />
          )}
          {formType === "addOnMenu" && (
            <AddOnMenuForm
              handleCloseModal={handleCloseModal}
              selectedCategory={selectedCategory}
              setItemsList={setItems}
            />
          )}
          {formType === "ChangeOnMenu" && selectedCategory && (
            <AddOnMenuForm
              handleCloseModal={handleCloseModal}
              selectedCategory={selectedCategory}
              setItemsList={setItems}
              modify={modify}
              setModify={setModify}
              item={item}
            />
          )}
        </Modal>
      )}
      <h2>Paramètres de votre menu</h2>
      <section className="section">
        {categories.length > 0 && (
          <>
            <button
              id="addCategory"
              className="button button-top button-add"
              onClick={() => openModal("addCategory")}
            >
              Ajouter categorie <Plus />
            </button>

            <div className="wrapper wrapper-home">
              <label htmlFor="category" className="label label-title">
                Sélectionne une catégorie:{" "}
              </label>
              <select
                name="category"
                id="category"
                className="input input-select"
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
            </div>

            {selectedCategory && (
              <div className="wrapper wrapper-home">
                <button
                  id="addOnMenu"
                  className="button button-add"
                  onClick={() => openModal("addOnMenu")}
                  disabled={!selectedCategory}
                >
                  Ajouter au menu <Plus />
                </button>
                <CategoryItemList
                  openModal={openModal}
                  setItem={setItem}
                  delItem={delItem}
                  setModify={setModify}
                  items={items}
                />
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Menu;
