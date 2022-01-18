const Input = ({ placeholder, type, value, image, altImg, onChange }) => {
  return (
    <div className="input-class">
      {image ? <img src={image} alt={altImg} className="input-image" /> : null}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="input-style-class name"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
