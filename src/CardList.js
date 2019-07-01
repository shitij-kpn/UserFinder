import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    const Carduser = robots.map((user,i)=>{
        return <Card key={i} name={user.name} id={user.id} email={user.email} />
    })
    return(
        <div>
            {Carduser}
        </div>
    );
}
export default CardList;