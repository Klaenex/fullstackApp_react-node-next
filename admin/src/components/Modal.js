import { useEffect } from "react";
const Modal = ({ handleCloseModal, children }) => {
  useEffect(() => {}, []);

  return (
    <>
      <button onClick={handleCloseModal}>Close modal</button>
      {children}
    </>
  );
};

export default Modal;
