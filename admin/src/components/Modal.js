const Modal = ({ handleCloseModal, children }) => {
  return (
    <>
      <div className="shadow_modal">
        <div className="modal">
          <div className="button button-cross" onClick={handleCloseModal}></div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
