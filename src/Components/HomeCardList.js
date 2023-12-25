import React from 'react';
import Card from './Card';
import cardsData from '../Data/CardsData.json';

const HomeCardList = () => {
    return (
        <div className="Home-CardList">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    name={card.name}
                    rating={card.rating}
                    src={card.src}
                    service={card.service}
                    notes={card.notes}
                />
            ))}
        </div>
    );
};

export default HomeCardList;