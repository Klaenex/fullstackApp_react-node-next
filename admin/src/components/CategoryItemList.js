import Delete from "./icons/Delete";
import Update from "./icons/Update";

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
      <ul className="list list-item">
        {items.map((item) => (
          <li key={item._id} className="item-element">
            <div>{item.name}</div>
            <span>
              <button
                className="button button-icon"
                onClick={() => modifyItem(item)}
              >
                <Update />
              </button>
              <button
                className="button button-icon"
                onClick={() => delItem(item._id)}
              >
                <Delete />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryItemList;
