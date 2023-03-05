import React from 'react'
import {Text,Box} from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

export const Second = () => {
  return (
    <div>
      <Text fontSize='xl' fontWeight="bold">ACTIVE STUDENTS</Text>

      <Box  border="1px solid black" mt="15px" > 
      <TableContainer>
      <Table variant='simple'>
      
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Last Activity</Th>
            <Th>Session</Th>
            <Th>Words</Th>
            <Th>Submission Date</Th>
            <Th>Type ID</Th>
            <Th>CB</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Taceveg 653</Td>
            <Td>12 hours ago</Td>
            <Td >7</Td>
            <Td>65</Td>
            <Td>12 hours ago</Td>
            <Td >100%</Td>
            <Td >100%</Td>
          </Tr>
          <Tr>
            <Td>Will Kinsman</Td>
            <Td>a month ago</Td>
            <Td >2</Td>
            <Td>118</Td>
            <Td>a month ago</Td>
            <Td >80%</Td>
            <Td >44%</Td>
          </Tr>
        </Tbody>
       
      </Table>
    </TableContainer>
      </Box>
    </div>
  )
}
