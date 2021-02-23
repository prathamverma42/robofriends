import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const CardArrays = robots.map((user,i) => {
        return(
            <Card
                name={robots[i].name} 
                id={robots[i].id} 
                email={robots[i].email}
            />
            )
    })
    return (
        <div>
            {CardArrays}
        </div>
    );
}

export default CardList;