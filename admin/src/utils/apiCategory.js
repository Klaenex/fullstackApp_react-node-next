import axios from "axios";
const baseUrl = "https://api-nodejs-restaurant.onrender.com/api/category";

// Récupérer toutes les catégories
const fetchCategories = async () => {
  try {
    const response = await axios.get(baseUrl);
    if (response.status === 200) {
      const categories = response.data;
      return categories;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Récupérer une seule catégorie par ID
async function fetchCategoryById(id) {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    if (response.status === 200) {
      const category = response.data;
      return category;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Créer une nouvelle catégorie
async function createNewCategory(form) {
  try {
    const response = await axios.post(baseUrl, form);
    if (response.status === 200) {
      const category = response.data;
      return category;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Supprimer une catégorie par ID
async function deleteCategoryById(id) {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    if (response.status === 200) {
      const category = response.data;
      return category;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Mettre à jour une catégorie par ID
async function updateCategoryById(id, updatedCategoryData) {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedCategoryData);
    if (response.status === 200) {
      const category = response.data;
      return category;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export {
  fetchCategories,
  fetchCategoryById,
  createNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
