import axios from "axios";
import { useEffect, useState } from "react";

const CategoryItemList = ({ handleCategory }) => {
  const [items, setItems] = useState([]);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/item/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const modifyItem = async (id) => {
    try {
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

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
    <>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <div>{item.title}</div>
            <div>
              <button onClick={() => modifyItem(item._id)}>Modifier</button>
              <button onClick={() => deleteItem(item._id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryItemList;
