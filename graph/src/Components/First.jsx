import React, {useState} from 'react'
import {Text,Flex,Button, Box} from "@chakra-ui/react";
import {LinkIcon,AddIcon} from "@chakra-ui/icons"
import { UserData } from '../Data';
import PieChart from './PieChart';
import { Second } from './Second';
import { Third } from './Third';
import Graph from './Graph';

export const First = () => {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.status),
        datasets: [
          {
            label: "Sumitted",
            data: UserData.map((data) => data.complete),
            backgroundColor: [
              "rgb(111,179,63)",
              "rgb(28,89,139)",
            ],
            borderColor: "white",
            borderWidth: 2,
          },
        ],
      });

      
  return (
    <div style={{
        margin: "auto",
        width:"70%",
        marginTop:"40px",
        border:"1px solid black",
        padding: "20px",
        borderRadius:"20px"
    }}>
      <Flex justifyContent="space-between" mt="20px">
      <Text fontSize='2xl'>assignment I</Text>
      <Button colorScheme='blue'><LinkIcon mr="10px"/> Invite Link<AddIcon ml="60px" mr="10px" /> student</Button>
      </Flex>

      <Flex justifyContent="space-between" mt="20px">
       <Box border="1px solid gray" borderRadius="20px" w="45%">
         <Text fontSize='8xl'>2</Text>
         <Text fontSize='xl'>ACTIVE STUDENTS</Text>
       </Box>
       <Box border="1px solid gray" borderRadius="20px" w="45%">
       <Text fontSize='8xl'>2</Text>
       <Text fontSize='xl'>SUBMISSIONS</Text>
       </Box>
      </Flex>

      <Flex justifyContent="space-between" mt="20px">
        <Box border="1px solid gray" borderRadius="20px" w="45%" p="10px" >
        <Text fontSize='l'>Sumitted Activities v/s Pending Submissions</Text>
        <PieChart chartData={userData} />
        </Box>
        <Box border="1px solid gray" borderRadius="20px" w="45%"  p="10px">
        <Text fontSize='l' mb="70px">Day-Wise Submissions</Text>

          <Graph />
        </Box>
      </Flex>

      <Box mt="20px" border="1px solid black" p="10px" borderRadius="10px">
      <Second />
      </Box>

      <Box mt="20px">
      <Text fontSize='3xl' fontWeight="bold" textAlign="left">Submissions</Text>
        <Third />
      </Box>
    </div>
  )
}
