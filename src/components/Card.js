import React from 'react';
import "../style/Card.css"
import { useNavigate } from 'react-router-dom';
const Card = ({name, description, imageUrl}) => {
  const navigate = useNavigate();
    return (
    <React.Fragment>
        <div className="card-body" onClick={()=>{
          navigate("/document/"+name);
        }}>
            <div className="card-title">{name}</div>
            <div className="card-button">{description}</div>
        </div>
       
    </React.Fragment>
    );
};


export default Card;