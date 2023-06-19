import React from "react";
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

const data = [
    { name: "The Flash", rating: 2, status: "Done" },
    { name: "The Arrow", rating: 5, status: "Done"},
    { name: "The Last of Us", rating: 4.5, status: "Current" },
    { name: "Blue Lock", rating: 3.5, status: "Current"},
]

const UserTable = () => {
    return (
        <TableContainer>
        <Table variant='striped' colorScheme="purple">
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Rating</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
            <Tbody>
            {data.map((val, key) => {
                return (
                <Tr key={key}>
                    <Td>{val.name}</Td>
                    <Td>{val.rating}</Td>
                    <Td>{val.status}</Td>
                </Tr>
                )
                })}
            </Tbody>
        </Table>
        </TableContainer>
    );
}
export default UserTable;