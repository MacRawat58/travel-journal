import React from "react";
import loca from "../images/location.png";




const Card = (props) =>{

    return(
        <div>
          <div className="Container">
            <div>
            <img className="card--img" src={props.imageUrl} alt="card-img" />
            </div>
            <div className="card--content">
                <div className="loc">
                <img  src={loca} alt="location"/> 
                <p className="card--p placee" >{(props.location).toUpperCase()}</p>
                <p className="card--p maps" onClick={""}>View on Google Maps</p>

                </div>
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--date"><strong>{props.startDate} - {props.endDate}</strong></h3>
                <p className="card--discription">{props.description}</p>


            </div>
        </div>

            <hr/>
        
        </div>

    );
}

export default Card;