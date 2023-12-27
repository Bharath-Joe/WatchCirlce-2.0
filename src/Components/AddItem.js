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
import { useState } from 'react';

const AddItem = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [TVShowName, setTVShowName] = useState("");
    const [streamingService, setStreamingService] = useState("");
    const [rating, setRating] = useState(0);
    const [notes, setNotes] = useState("");

    const handleSave = () => {
        onClose()
        console.log("Name: " + TVShowName, "Service: " + streamingService, "Notes:" + notes, "Rating: " + rating)
        setTVShowName("")
        setStreamingService("")
        setNotes("")
        setRating(0)
    }

    return (
        <div>
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
                            <Input value={TVShowName} onChange={(event) => setTVShowName(event.target.value)} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Streaming Service</FormLabel>
                            <Input value={streamingService} onChange={(event) => setStreamingService(event.target.value)} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Personal Rating</FormLabel>
                            <Rating precision={0.5} size="large" value={rating} onChange={(newValue) => {setRating(newValue)}} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Display Image</FormLabel>
                            <input type='file' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Notes</FormLabel>
                            <Textarea value={notes} onChange={(event) => setNotes(event.target.value)} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSave}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default AddItem;