import React from "react";
import '../stylesheets/estilo.css'

function Triki(props) {
    return (
        <section className="seccion">
            <div className="card">
                <div className="body-card">
                    <div className="img">
                        <img src={require(`../images/${props.imagen1}.png`)} alt="" className="hero" />
                    </div>
                    <div className="text">
                        <h1 className="title-1">{props.title1}</h1>
                        <p className="text-1"> {props.text1}</p>
                    </div>
                    <div className="btn" >
                        <div className="img2">
                            <img src={require(`../images/${props.imagen2}.svg`)} alt="" className="img2" />
                        </div>
                        <div className="text-2">
                            <h2 className="title-2">{props.title2}</h2>
                            <p className="price">{props.price}</p>
                        </div>
                        <div className="link">
                            <a href="" className="btn-1"><p className="txt-btn-1">{props.txtbtn1}</p></a>
                        </div>
                    </div>
                    <div className="btn2">
                        <h1 className="title-3">{props.title3}</h1>
                    </div>
                    <div class="btn3">
                        <h1 className="title-4">{props.title4}</h1>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default Triki;