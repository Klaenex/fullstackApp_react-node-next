import React, { useState } from "react";
import axios from "axios";
const HomeForm = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    title1: "",
    text1: "",
    img1: null,
    title2: "",
    text2: "",
    img2: null,
    instagramGalery: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("/api/home", formData);
    } catch (error) {
      console.error(error);
    }
    console.log(formData);
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="title1">Titre 1 :</label>
      <input
        type="text"
        id="title1"
        name="title1"
        value={formData.title1}
        onChange={handleChange}
      />

      <label htmlFor="text1">Texte 1 :</label>
      <textarea
        id="text1"
        name="text1"
        value={formData.text1}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="img1">Image 1 :</label>
      <input
        type="file"
        id="img1"
        name="img1"
        accept="image/*"
        onChange={handleFileChange}
      />

      <label htmlFor="title2">Titre 2 :</label>
      <input
        type="text"
        id="title2"
        name="title2"
        value={formData.title2}
        onChange={handleChange}
      />

      <label htmlFor="text2">Texte 2 :</label>
      <textarea
        id="text2"
        name="text2"
        value={formData.text2}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="img2">Image 2 :</label>
      <input
        type="file"
        id="img2"
        name="img2"
        accept="image/*"
        onChange={handleFileChange}
      />

      <label htmlFor="instagramGalery">Galerie Instagram :</label>
      <input
        type="text"
        id="instagramGalery"
        name="instagramGalery"
        value={formData.instagramGalery}
        onChange={handleChange}
      />

      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default HomeForm;
