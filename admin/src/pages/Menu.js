import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddCategoryForm from "../components/AddCategoryForm";

const Menu = () => {
  //category
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState(null);
  //modal
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/category");
      const json = await response.json();
      if (response.ok) {
        setCategories(json);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/api/item/category`);
      const json = await response.json();
      if (response.ok) {
        setItems(json);
        console.log(items);
      }
    };
    fetchItems();
  }, []);

  const changeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleAddCategory = () => {
    setFormType("addCategory");
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="menu">
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          {formType === "addCategory" && <AddCategoryForm />}
        </Modal>
      )}
      <h2>Menu</h2>
      <label htmlFor="addCategory">Add a category:</label>
      <button id="addCategory" onClick={handleAddCategory}>
        Add category
      </button>
      <label htmlFor="category">Choose a category:</label>

      <select name="category" id="category" onChange={changeCategory}>
        {categories &&
          categories.map((category) => (
            <option key={category._id} value={category.titleCategory}>
              {category.titleCategory}
            </option>
          ))}
      </select>

      <ul></ul>
    </div>
  );
};

export default Menu;
