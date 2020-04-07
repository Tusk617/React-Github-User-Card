import React from "react";

export default function Card(props) {


    return (
        <div className="User Card">
            <img src = {props.fAvatar} alt = {`The profile picture of user: ${props.name}`} />
            <p>Location: {props.fLocation}</p>
            <div className="username">
                <h3>Username:</h3>
                <p>{props.fName}</p>
            </div>
        </div>
    )
}