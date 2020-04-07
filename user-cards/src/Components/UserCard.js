import React from "react";

export default function Card(props) {


    return (
        <div className="User Card">
            <img src = {props.avatar}/>
            <p>{props.location}</p>
            <div className="username">
                <h3>Username:</h3>
                <p>{props.name}</p>
            </div>
        </div>
    )
}