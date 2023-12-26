import React from 'react';
import Card from './Card';
import cardsData from '../Data/CardsData.json';
import { AddIcon } from '@chakra-ui/icons';
import { Rating } from "@mui/material";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea
} from '@chakra-ui/react'

const HomeCardList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="Home-CardList">
            <div className='Add-Card' onClick={onOpen}>
                Add to WatchList
                <AddIcon boxSize="8" />
            </div>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add to WatchList</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='Modal-Body'>
                        <FormControl isRequired>
                            <FormLabel>TV Show Name</FormLabel>
                            <Input />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Streaming Service</FormLabel>
                            <Input />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Personal Rating</FormLabel>
                            <Rating precision={0.5} size="large"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Display Image</FormLabel>
                            <input type='file' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Notes</FormLabel>
                            <Textarea />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
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