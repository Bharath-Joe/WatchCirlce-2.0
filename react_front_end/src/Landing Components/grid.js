import React, { useState } from "react";
import ReactStars from "react-stars";
import {
    SimpleGrid,
    Card,
    CardFooter,
    Center,
    Button,
    CardBody,
    CardHeader,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export const Grid = () => {
    const [gridList, setGridList] = useState([]);

    function addBox() {
        const boxComponent = (
            <Card
                align="center"
                width="200px"
                height="296px"
                backgroundColor="transparent"
                border="solid"
                borderColor="white"
            >
                <CardHeader>
                    <button onClick={addBox}>
                        <DeleteIcon color="white" boxSize={6}/>
                    </button>
                </CardHeader>
                <CardBody>
                    <form>
                        {/* <input type="text" id="showName" placeholder = "Show Name" style="width: 3px;"/> */}
                        {/* <input type="text" placeholder="name" style="width: 300px;"/> */}
                        <input type="submit">
                            <Button>Add</Button>
                        </input>
                        <ReactStars size={25}/>
                        {/* <input type="text" placeholder="Notes" id="showNotes"/> */}
                    </form>
                </CardBody>
            </Card>
        );
        setGridList(gridList.concat(boxComponent));
    }

    function removeBox(b) {
        for (let i = 0; i < gridList.length; i++) {
            if (b === gridList[i]) {
                setGridList(gridList.slice(i, 1));
            }
        }
    }

    return (
        <div className="grid">
            <SimpleGrid columns={6} spacingX="40px" spacingY="20px">
                {gridList}
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
