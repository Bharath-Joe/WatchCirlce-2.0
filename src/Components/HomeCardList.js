import Card from './Card';
import cardsData from '../Data/CardsData.json';
import AddItem from './AddItem';

const HomeCardList = () => {

    return (
        <div className="Home-CardList">
            <AddItem/>
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    name={card.name}
                    rating={parseInt(card.rating)}
                    src={card.src}
                    service={card.service}
                    notes={card.notes}
                />
            ))}
        </div>
    );
};

export default HomeCardList;