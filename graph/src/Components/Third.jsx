import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Button,
    Flex,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

export const Third = () => {
  return (
    <div>
    <TableContainer >
    <Table variant='simple' textAlign="center" justifyContent="center" border="1px solid black" mt="10px">
    
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Submission status</Th>
          <Th>Grading Status</Th>
          <Th>Submission Date</Th>
          <Th >Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Will Kinsman</Td>
          <Td bg="#6fb33f" color="white">Submitted</Td>
          <Td bg="gray" color="white">Pending</Td>
          <Td>a month ago</Td>
          <Td>
             <Flex gap="15px">
             <Button bg="#6fb33f" color="white">Button</Button>
             <Button bg="#2e318a" color="white">Button</Button>
             </Flex>
          </Td>
          
        </Tr>
        <Tr>
        <Td>Taceveg 653</Td>
        <Td bg="#6fb33f" color="white">Submitted</Td>
        <Td bg="gray" color="white">Pending</Td>
        <Td>6 month ago</Td>
        <Td>
           <Flex  gap="15px">
           <Button bg="#6fb33f" color="white">Button</Button>
           <Button bg="#2e318a" color="white">Button</Button>
           </Flex>
        </Td>
        </Tr>

      </Tbody>
     
    </Table>
  </TableContainer>
    </div>
  )
}
