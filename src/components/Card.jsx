import React from "react";
import '../stylesheets/Card.css';

function Card(props) {
    return (
        <div className="Card-container">
            <p className="text-gray">{props.comment}</p>
            <div>
                <img src={require(`../images/${props.imagen}.jpg`)} alt="" className="img-profile" />
                <h3 className="text-blue">{props.nombre}</h3>
                <p>{props.cargo}</p>
            </div>
        </div>

    );
}


export default Card;
