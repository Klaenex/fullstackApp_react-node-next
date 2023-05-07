import { useEffect, useState } from "react";
import axios from "axios";

const AddOnMenuForm = ({ category }) => {
  const [formType, setFormType] = useState(null);

  useEffect(() => {
    const getCategory = () => {
      axios
        .get(`/api/category/${category}`)
        .then((response) => {
          setFormType(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategory();
  }, [category]);
  console.log(formType);
  return <form>{category} test</form>;
};

export default AddOnMenuForm;
