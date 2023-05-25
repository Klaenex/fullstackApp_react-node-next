const AddOnMenuForm = ({ data }) => {
  console.log(data);

  return (
    <form>
      {Object.entries(data).map(([key, value]) => {
        if (key.startsWith("price") || key.startsWith("alcool")) {
          return (
            <div key={key}>
              <label htmlFor={key}>{key}</label>
              <input type="number" id={key} name={key} />
            </div>
          );
        } else if (key.startsWith("bitterness")) {
          return (
            <div key={key}>
              <label htmlFor={key}>{key}</label>
              <input
                type="range"
                id={key}
                name={key}
                min="0"
                max="10"
                step="1"
              />
            </div>
          );
        } else if (typeof value === "boolean" && value) {
          return (
            <div key={key}>
              <label htmlFor={key}>{key}</label>
              <input type="text" id={key} name={key} />
            </div>
          );
        }

        return null;
      })}
    </form>
  );
};

export default AddOnMenuForm;
