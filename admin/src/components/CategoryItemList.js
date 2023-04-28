import axios from "axios";
import { useEffect, useState } from "react";

const CategoryItemList = ({ handleCategory }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/item/category/${handleCategory}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [handleCategory]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default CategoryItemList;
