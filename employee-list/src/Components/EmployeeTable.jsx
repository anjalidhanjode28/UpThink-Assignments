import React, {useState, useEffect} from 'react'
import "./employee.css"
import { FormControl, FormLabel, useDisclosure } from '@chakra-ui/react';
import {CloseIcon, AddIcon} from "@chakra-ui/icons"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Input, Button, Flex
  } from '@chakra-ui/react'


export const EmployeeTable = () => {
    const [data, setData] = useState([])
    const [editVal, setEditVal] = useState({})
    const [flag, setFlag] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [reload, setReload] = useState(false);

    

    const getData = () => {
       let item = fetch("https://vercel-deploy-iota-two.vercel.app/employee")
        .then((res) => res.json())
        .then((res) => {
            // console.log(res)
            setData(res)
        }).catch((err) =>{
            console.log(err)
        })
      
    }
    const EditData = (data, id) => {
        fetch(`https://vercel-deploy-iota-two.vercel.app/employee/${id}`,{
            method: "PATCH",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res) => {
            setReload(!reload)
            setFlag(!flag)
            onClose()
        }).catch((err) =>{
            console.log(err)
            setReload(!reload)
            onClose()
    
        })
       
     }

 const setColor = (value) =>{
   if(value === "Admin"){
    return "red"
   }else if(value === "Instructor"){
    return "pink";
   }else{
    return "teal";
   }
 }
    

    useEffect(() => {
        getData()
    }, [reload]);
  
  return (
    <div className='container'>
    <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Groups</th>
  </tr>
 {
    data.map((el) => (
        <tr onClick={() => {onOpen(); setEditVal(el)}} key={el.id}>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td><Button colorScheme={setColor(el.groups)} variant='solid'> {el.groups}</Button> </td>
      </tr>
    ))
 }
  
</table>

<div>
<Modal
isCentered
isOpen={isOpen}
onClose={onClose}
>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Edit User Profile</ModalHeader>
  <ModalCloseButton />
  <ModalBody pb={6}>
    <FormControl>
    <Flex gap="20px">
      <FormLabel>Name</FormLabel>
      <Input value={editVal.name} onChange={(e) => setEditVal({...editVal, name : e.target.value})} placeholder='Name' w="300px"/>
     { flag?  
        <Button colorScheme='blue'  p="20px" onClick={() => setFlag(!flag)}>Change</Button> : 
        <Flex gap="10px">
        <Button colorScheme='blue'  p="20px" onClick={() => setFlag(!flag)}>Cancel</Button> 
        <Button colorScheme='blue'  p="20px" onClick={() => EditData({name : editVal.name, email : editVal.email, groups : editVal.groups}, editVal.id)}>Save</Button>
        </Flex>}
      </Flex>
    </FormControl>

    <FormControl mt={4}>
    <Flex gap="20px">
      <FormLabel>Email</FormLabel>
      <Input value={editVal.email} placeholder='Email' w="250px" />
      </Flex>
    </FormControl>

    <FormControl mt={4}>
    <Flex gap="20px">
      <FormLabel>Groups</FormLabel>
      <Button colorScheme='blue' onClick={() => setEditVal({...editVal, groups : "Student"})}>Student <CloseIcon ml="10px"/> </Button>
      <Button colorScheme='pink' onClick={() => setEditVal({...editVal, groups : "Instructor"})}>Instructor <AddIcon ml="10px"/> </Button>
      </Flex>
    </FormControl>

    
  </ModalBody>

</ModalContent>
</Modal>
</div>
    
    </div>
  )
}
