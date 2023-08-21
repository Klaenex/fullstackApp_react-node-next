const CategoryItemList = ({
  openModal,
  setItem,
  setModify,
  items,
  delItem,
}) => {
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
            <div>{item.name}</div>
            <div>
              <button
                className="button button-icon"
                onClick={() => modifyItem(item)}
              >
                Modifier
              </button>
              <button
                className="button button-icon"
                onClick={() => delItem(item._id)}
              >
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
