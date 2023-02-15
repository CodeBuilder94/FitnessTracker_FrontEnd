import React from "react";

const UserPage = (props) =>{
    const {user} = props;

    //call function to get all the users routines

    return<div>
        <h2>${user.username}</h2>
    </div>
}

export default UserPage