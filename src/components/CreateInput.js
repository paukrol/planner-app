const CreateInput = ({ className, afternoonValue, setAfternoonValue }) => {
  return (
    <div className={className}>
      <label className="box"></label>
      <input
        type="text"
        value={afternoonValue}
        onChange={(e) => setAfternoonValue(e.target.value)}
      />
    </div>
  );
};

export default CreateInput;
