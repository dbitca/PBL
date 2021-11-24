const  Button = ({buttonClassName, title, onClick}) => {

    return ( <div 
        className={buttonClassName}
        onClick={onClick}
    >
        <button>{title}</button>
    </div>);

}

export default Button;