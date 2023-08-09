const CategoryItemList = ({ openModal, setItem, setModify, items }) => {
  const modifyItem = (itemData) => {
    openModal("ChangeOnMenu");
    setModify(true);
    setItem(itemData);
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <div>{item.title}</div>
            <div>
              <button onClick={() => modifyItem(item)}>Modifier</button>
              <button onClick={() => console.log(item.categoryId)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryItemList;
