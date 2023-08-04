const Modal = ({ handleCloseModal, children }) => {
  return (
    <>
      <button onClick={handleCloseModal}>Close modal</button>
      {children}
    </>
  );
};

export default Modal;
