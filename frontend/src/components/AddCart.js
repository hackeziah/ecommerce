import {
    Box, Button,
    Flex,
    Grid,
    Image, Input,
    Modal,
    ModalBody,
    ModalCloseButton, ModalContent,
    ModalFooter,
    ModalHeader, ModalOverlay,
    SimpleGrid, Stack,
    Text, useDisclosure
} from "@chakra-ui/core";
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
const AddCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    // const initialState = {
    //     basket: []

    // };

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case 'addBasket':
    //             return { count: state.count };
    //         default:
    //             return state
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, initialState);



    // <button onClick={() => dispatch({ type: '' })}>-</button>
    // <button onClick={() => dispatch({ type: 'addBasket' })}>+</button>

    return (
        <>

            <Button
                size="md"
                height="45px"
                width="100%"
                border="2px"
                variantColor="teal"
                borderColor="green.500"
                onClick={onOpen}
            >
                <Flex >
                    <FiShoppingCart />
                </Flex>
                <Flex align="center" ml={2}>Order</Flex>

            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl" rounded={1}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader backgroundColor="#33BDBA">My Basket</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Grid templateColumns="repeat(2, 1fr)" gap={2} mt={2} bg="#fafafa">
                            <Box h="100px" w="100px" borderWidth="1px" rounded="lg" overflow="hidden" bg="#fafafa">
                                <Image
                                    size="100px"
                                    objectFit="cover"
                                    src="https://bit.ly/sage-adebayo"
                                    alt="Segun Adebayo"
                                />

                            </Box>
                            <Box h="100px" w="350px" bg="#f2fafa">
                                <Stack mx={1} spacing={1}>
                                    <Text fontSize="xl">Product Name: Humberger</Text>
                                    <Text fontSize="xl">Price:₱ 32.00 </Text>

                                    <SimpleGrid columns={4} spacing={2}>
                                        <Text fontSize="xl">Quantity:  </Text>
                                        <Input placeholder="" h={30} w={50} />
                                        <Text fontSize="xl">Total:</Text>
                                        <Text fontSize="xl">₱ 32.00</Text>

                                    </SimpleGrid>
                                </Stack>
                            </Box>
                        </Grid>


                        <Grid templateColumns="repeat(2, 1fr)" gap={2} mt={2} bg="#fafafa">
                            <Box h="100px" w="100px" borderWidth="1px" rounded="lg" overflow="hidden" bg="#fafafa">
                                <Image
                                    size="100px"
                                    objectFit="cover"
                                    src="https://bit.ly/sage-adebayo"
                                    alt="Segun Adebayo"
                                />

                            </Box>
                            <Box h="100px" w="350px" bg="#f2fafa">
                                <Stack mx={1} spacing={1}>
                                    <Text fontSize="xl">Product Name: Humberger</Text>
                                    <Text fontSize="xl">Price:₱ 32.00 </Text>

                                    <SimpleGrid columns={4} spacing={2}>
                                        <Text fontSize="xl">Quantity:  </Text>
                                        <Input placeholder="" h={30} w={50} />
                                        <Text fontSize="xl">Total:</Text>
                                        <Text fontSize="xl">₱ 32.00</Text>

                                    </SimpleGrid>
                                </Stack>
                            </Box>
                        </Grid>

                    </ModalBody>

                    <ModalFooter>
                        <Text fontSize="25px" color="tomato" alignItems="" >
                            Sub Total: ₱ 64.00
                                </Text>
                    </ModalFooter>

                    <SimpleGrid columns={1} spacing={2} px={2} py={2}>

                        <Button backgroundColor="#33BDBA" >
                            PROCEED TO CHECKOUT
                                 </Button>
                        <Button backgroundColor="#33BDBA" onClick={onClose}>
                            CLOSE BASKET
                                </Button>
                    </SimpleGrid>

                </ModalContent>
            </Modal>
        </>
    );
}
export default AddCart;