import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus, FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import LevelTabs from "./LevelTabs";

const TreeComponent = () => {
  return (
    <>
      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
        w="90%"
        // border="1px solid black"
        borderRadius={"2rem"}
        m="auto"
        p="1.7rem"
        mt="5rem"
        mb="7rem"
      >
        <Text
          mt="2rem"
          mb="4rem"
          fontSize="3rem"
          textDecoration={"underline"}
          textAlign={"center"}
        >
          Tree Component Rendering
        </Text>
        <Box border="1px solid #CCCCCC" w="50%" ml="1rem" mb="3rem">
          <Accordion allowMultiple>
            {/* Level 1 Accordian Tab */}

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <Box>
                    <AccordionButton>
                      <Box display={"flex"} textAlign="left" fontSize="1.5rem">
                        <Box mr="1rem" mt="0.4rem">
                          {isExpanded ? <FaMinus /> : <BiPlusMedical />}
                        </Box>
                        <Box mr="1rem" mt="0.4rem">
                          <FaSchool />
                        </Box>
                        <Box>Liverpool(1558)</Box>
                      </Box>
                    </AccordionButton>
                  </Box>
                  <AccordionPanel pb={4}>
                    {/* Level 2 Accordian Tab */}

                    <AccordionItem>
                      {({ isExpanded }) => (
                        <>
                          <Box>
                            <AccordionButton>
                              <Box
                                display={"flex"}
                                textAlign="left"
                                fontSize="1.5rem"
                              >
                                <Box mr="1rem" mt="0.4rem">
                                  {isExpanded ? <FaMinus /> : <BiPlusMedical />}
                                </Box>
                                <Box mr="1rem" mt="0.4rem">
                                  <FaSchool />
                                </Box>
                                <Box>Joe's Demo School(1569)</Box>
                              </Box>
                            </AccordionButton>
                          </Box>
                          <AccordionPanel pb={4}>
                            <AccordionItem>
                              {({ isExpanded }) => (
                                <>
                                  <Box>
                                    <AccordionButton>
                                      <Box
                                        display={"flex"}
                                        textAlign="left"
                                        fontSize="1.5rem"
                                      >
                                        <Box mr="1rem" mt="0.4rem">
                                          {isExpanded ? (
                                            <FaMinus />
                                          ) : (
                                            <BiPlusMedical />
                                          )}
                                        </Box>
                                        <Box mr="1rem" mt="0.4rem">
                                          <IoSchool />
                                        </Box>
                                        <Box>English Comp(1570)</Box>
                                      </Box>
                                    </AccordionButton>
                                  </Box>
                                  <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </AccordionPanel>
                                </>
                              )}
                            </AccordionItem>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>

                    {/* Level 2 Accordian Tab */}
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <>
                          <Box>
                            <AccordionButton>
                              <Box
                                display={"flex"}
                                textAlign="left"
                                fontSize="1.5rem"
                              >
                                <Box mr="1rem" mt="0.4rem">
                                  {isExpanded ? <FaMinus /> : <BiPlusMedical />}
                                </Box>
                                <Box mr="1rem" mt="0.4rem">
                                  <FaSchool />
                                </Box>
                                <Box>Model Training Academy(1631)</Box>
                              </Box>
                            </AccordionButton>
                          </Box>
                          <AccordionPanel pb={4}>
                            {/* Level 3 Accordian Tab */}

                            {/* Tab 1 */}

                            <AccordionItem>
                              {({ isExpanded }) => (
                                <>
                                  <Box>
                                    <AccordionButton>
                                      <Box
                                        display={"flex"}
                                        textAlign="left"
                                        fontSize="1.5rem"
                                      >
                                        <Box mr="1rem" mt="0.4rem">
                                          {isExpanded ? (
                                            <FaMinus />
                                          ) : (
                                            <BiPlusMedical />
                                          )}
                                        </Box>
                                        <Box mr="1rem" mt="0.4rem">
                                          <IoSchool />
                                        </Box>
                                        <Box>Version 1.2 (1772)</Box>
                                      </Box>
                                    </AccordionButton>
                                  </Box>
                                  <AccordionPanel pb={4}>
                                    <LevelTabs />
                                  </AccordionPanel>
                                </>
                              )}
                            </AccordionItem>
                            {/* Tab 2 */}

                            <AccordionItem>
                              {({ isExpanded }) => (
                                <>
                                  <Box>
                                    <AccordionButton>
                                      <Box
                                        display={"flex"}
                                        textAlign="left"
                                        fontSize="1.5rem"
                                      >
                                        <Box mr="1rem" mt="0.4rem">
                                          {isExpanded ? (
                                            <FaMinus />
                                          ) : (
                                            <BiPlusMedical />
                                          )}
                                        </Box>
                                        <Box mr="1rem" mt="0.4rem">
                                          <IoSchool />
                                        </Box>
                                        <Box>Version 1.0 (1632)</Box>
                                      </Box>
                                    </AccordionButton>
                                  </Box>
                                  <AccordionPanel pb={4}>
                                    <LevelTabs />
                                  </AccordionPanel>
                                </>
                              )}
                            </AccordionItem>
                            {/* Tab 3 */}

                            <AccordionItem>
                              {({ isExpanded }) => (
                                <>
                                  <Box>
                                    <AccordionButton>
                                      <Box
                                        display={"flex"}
                                        textAlign="left"
                                        fontSize="1.5rem"
                                      >
                                        <Box mr="1rem" mt="0.4rem">
                                          {isExpanded ? (
                                            <FaMinus />
                                          ) : (
                                            <BiPlusMedical />
                                          )}
                                        </Box>
                                        <Box mr="1rem" mt="0.4rem">
                                          <IoSchool />
                                        </Box>
                                        <Box>Version 1.1 (1673)</Box>
                                      </Box>
                                    </AccordionButton>
                                  </Box>
                                  <AccordionPanel pb={4}>
                                    <LevelTabs />
                                  </AccordionPanel>
                                </>
                              )}
                            </AccordionItem>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default TreeComponent;
