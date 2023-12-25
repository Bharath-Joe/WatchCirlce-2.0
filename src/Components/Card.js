import { Rating } from "@mui/material";
import { Text, Button } from "@chakra-ui/react";

const Card = ({ name, rating, src, service, notes }) => {
    return (
        <div className="Card">
            <div className="Inner-Card">
                <div className="Front-Card">
                    <div className="Card-Image">
                        <img src={src} alt={name} />
                    </div>
                    <div className="Card-Text">
                        <h3><b>{name}</b></h3>
                        <p className="Rating">Personal Rating: <Rating value={rating} readOnly precision={0.5} /></p>
                    </div>
                </div>
                <div className="Back-Card">
                    <Text fontSize="25px" as="u">{name}</Text>
                    <div className="Back-Card-Info">
                        <p className="Rating"><Text as='b'>Personal Rating: </Text><Rating value={rating} readOnly precision={0.5} /></p>
                        <Text><Text as='b'>Streamig Service: </Text>{service}</Text>
                        <Text><Text as='b'>Image URL: </Text>{src}</Text>
                        <Text><Text as='b'>Notes: </Text>{notes}</Text>
                    </div>
                    <Button variant="solid" className="Edit-Button">Edit</Button>
                </div>
            </div>
        </div>
    );

};

export default Card;