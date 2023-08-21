import axios from "axios";
const baseUrl = "/api/item";

// Fonction pour récupérer tous les items
const getAllItems = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Fonction pour récupérer un item par son ID
const getOneItem = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour récupérer tous les items d'une catégorie
const getAllItemsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${baseUrl}/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching items for category ID ${categoryId}:`, error);
    throw error;
  }
};

// Fonction pour créer un nouvel item
const createItem = async (itemData) => {
  try {
    const response = await axios.post(baseUrl, itemData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

// Fonction pour supprimer un item par son ID
const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour mettre à jour un item par son ID
const updateItem = async (id, updatedItemData) => {
  try {
    const response = await axios.patch(`${baseUrl}/${id}`, updatedItemData);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    throw error;
  }
};

export {
  getAllItems,
  getOneItem,
  getAllItemsByCategory,
  createItem,
  deleteItem,
  updateItem,
};
