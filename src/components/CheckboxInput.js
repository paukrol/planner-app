const CheckboxInput = ({ keyName, index, item, handleCheck, id }) => {
  return (
    <div className={`${keyName}-item`}>
      {item.item !== "" ? (
        <>
          <input
            className="checkbox"
            hidden
            checked={item.checked}
            type="checkbox"
            id={`${keyName}-${index + 1}`}
            onChange={() => handleCheck(id, index)}
          />
          <label
            className={`${keyName}-label`}
            htmlFor={`${keyName}-${index + 1}`}
          >
            <div className="myBox"></div>
            <div className="plan-dotted">
              <p>{item.item}</p>
            </div>
          </label>
        </>
      ) : (
        <>
          <input
            disabled
            hidden
            className="checkbox"
            type="checkbox"
            id={`${keyName}-${index + 1}`}
          />
          <label
            className={`${keyName}-label`}
            htmlFor={`${keyName}-${index + 1}`}
          >
            <div className="myBox"></div>
            <div className="plan-dotted">
              <p>{item.item}</p>
            </div>
          </label>
        </>
      )}
    </div>
  );
};

export default CheckboxInput;
