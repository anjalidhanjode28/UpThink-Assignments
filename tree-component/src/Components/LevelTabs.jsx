import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SlNote } from "react-icons/sl";
import { data } from "./StudentData";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LevelTabs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [text, setText] = useState("");
  const [active, setActive] = useState(0);
  const [submit, setSubmit] = useState(0);

  let [barData, setBarData] = useState({
    labels: ["active", "submit"],
    datasets: [
      {
        label: "Student Data",
        data: [active, submit],
        backgroundColor: ["green", "purple"],
      },
    ],
  });
 

  return (
    <Box fontSize="1.4rem">
      {data.map((ele) => {
        return (
          <>
            <Box
              display={"flex"}
              border="1px solid #CCCCCC"
              p="0.7rem"
              mb="0.7rem"
              cursor={"pointer"}
              ref={btnRef}
              onClick={() => {
                onOpen();
                setText(ele.student1);
                setActive(Number(ele.active));
                setSubmit(Number(ele.submission));
                setBarData((prev) => {
                  return {
                    ...prev,
                    datasets: [
                      {
                        label: "Student Data",
                        data: [Number(ele.active), Number(ele.submission)],
                        backgroundColor: ["green", "purple"],
                      },
                    ],
                  };
                });
              }}
            >
              <Box mr="1rem" mt="0.4rem">
                <SlNote />
              </Box>
              <Box>
                {ele.student1} {ele.num}
              </Box>
            </Box>
          </>
        );
      })}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{text}</DrawerHeader>

          <DrawerBody>
            <Box
              display={"grid"}
              gridTemplateColumns="repeat(2,1fr)"
              gap="2rem"
              textAlign={"Center"}
            >
              <Box
                border={"1px solid #CCCCCC"}
                borderRadius="0.7rem"
                p="0.7rem"
                h="15rem"
              >
                <Text fontSize={"5rem"} fontWeight="bold">
                  {active}
                </Text>
                <Text fontSize={"2rem"}>Active Students</Text>
              </Box>
              <Box
                border={"1px solid #CCCCCC"}
                borderRadius="0.7rem"
                p="0.7rem"
              >
                <Text fontSize={"5rem"} fontWeight="bold">
                  {submit}
                </Text>
                <Text fontSize={"2rem"}>Submissions</Text>
              </Box>
              <Box
                border={"1px solid #CCCCCC"}
                borderRadius="0.7rem"
                p="0.7rem"
                h="15rem"
              >
                <Text fontSize={"0.9rem"}>
                  Submitted Activities vs Pending Activities
                </Text>
                <Text fontSize={"2.5rem"} fontWeight="bold">
    
                  <Box w="200px" minHeight={"200px"} m="auto">
                    <Pie data={barData} />
                  </Box>
                </Text>
              </Box>
              <Box
                border={"1px solid #CCCCCC"}
                borderRadius="0.7rem"
                p="0.7rem"
              >
                <Text fontSize={"0.9rem"}>Day-wise Submissions</Text>
                <Text fontSize={"2rem"} fontWeight="bold">
                  Max Submission on : {new Date().toLocaleDateString()}
                </Text>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default LevelTabs;
