const  Input = ({placeholder, type, value, image, altImg, onChange}) => {

    return (<div className="input-class">
        <img 
            src={image} 
            alt={altImg} 
            className="input-image"
        />
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className="name"
            onChange={onChange}
        />
      </div>);

}

export default Input;