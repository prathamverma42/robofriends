import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user,i) => {
                    return(
                        <Card
                            key={robots[i].name}
                            name={robots[i].name} 
                            id={robots[i].id} 
                            email={robots[i].email}
                        />
                        )
                })
            }
        </div>
    );
}

export default CardList;