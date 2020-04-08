import React from "react";
import "../UserCard.css"
import { Card, CardImg, CardText, CardTitle } from "reactstrap";

export default function UserCard(props) {


    return (
        <div className="User-Card">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardImg width= "200" src = {props.avatar} alt = {`The profile picture of user: ${props.name}`} />
            <CardText>Location: {props.location}</CardText>
            <div className="username">
                <CardTitle>Username:</CardTitle>
                <p>{props.name}</p>
            </div>
            </Card>
        </div>
    )
}