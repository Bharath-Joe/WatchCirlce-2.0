import React, { useState } from "react";
import ReactStars from "react-stars";
import {
    SimpleGrid,
    Card,
    Center,
    CardBody,
    CardHeader,
    Select,
    Button,
    CardFooter
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, ArrowUpDownIcon} from "@chakra-ui/icons";

export const Grid = () => {
    const [gridList, setGridList] = useState([]);
    function addBox() {
        const newBoxComp = {
            id: gridList.length + 1,
        };

        setGridList([...gridList, newBoxComp]);
    }

    function removeBox(id) {
        setGridList(gridList.filter((card) => card.id !== id));
    }

    return (
        <div className="grid">
            <SimpleGrid columns={6} spacingX="40px" spacingY="20px">
                {gridList.map((card) => (
                    <Card
                        // variant="elevated"
                        key={card.id}
                        align="center"
                        width="200px"
                        height="296px"
                        backgroundColor="transparent"
                        border="solid"
                        borderColor="white"
                    >
                        <CardHeader>
                            <button onClick={() => removeBox(card.id)}>
                                <DeleteIcon color="white" boxSize={6} />
                            </button>
                        </CardHeader>
                        <CardBody>
                            <form>
                                <input type="text" placeholder="Name" className="card-input"/>
                                <ReactStars size={25} />
                                <Select icon={<ArrowUpDownIcon />} placeholder="Select Option" bg="white">
                                    <option value="option1">Past Watch</option>
                                    <option value="option2">Present Watch</option>
                                    <option value="option3">Future Watch</option>
                                </Select>
                            </form>
                        </CardBody>
                        <CardFooter>
                            <Button>Add</Button>
                        </CardFooter>
                    </Card>
                ))}
                <Card
                    border="dashed"
                    width="200px"
                    height="296px"
                    backgroundColor="transparent"
                    borderColor="white"
                >
                    <Center h="296px">
                        <button onClick={addBox}>
                            <AddIcon boxSize={10} color="white" />
                        </button>
                    </Center>
                </Card>
            </SimpleGrid>
        </div>
    );
};
