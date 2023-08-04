const Input = ({ type, name, maxlength, minlength }) => {
  return (
    <>
      <label for={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        required
        minLength={maxlength}
        maxLength={minlength}
      />
    </>
  );
};

export default Input;
