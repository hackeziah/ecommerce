import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import { FiLogIn, FiShoppingBag, FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import MyAlert from "../MyAlert";

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {children}
    </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Fragment>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
                bg="#33bdba"
                color="white"
                {...props}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                        BuyEat PH       </Heading>
                </Flex>

                <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                    <svg
                        fill="white"
                        width="12px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Box>

                <Box
                    display={{ sm: show ? "block" : "none", md: "flex" }}
                    width={{ sm: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                >
                    <MenuItems>Desserts</MenuItems>
                    <MenuItems>Salads</MenuItems>
                    <MenuItems>Pasta</MenuItems>
                    <MenuItems>Break Fast</MenuItems>

                </Box>

                <Box
                    display={{ sm: show ? "block" : "none", md: "block" }}
                    mt={{ base: 4, md: 0 }}
                >
                    <Button border="1px" variantColor="teal">
                        <FiShoppingBag />
                    </Button>

                    <Link to="/register" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>
                        <Button border="1px" ml={1} variantColor="teal">
                            <FiUserPlus />
                        </Button>
                    </Link>


                    <Link to="/login" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>
                        <Button border="1px" ml={1} variantColor="teal">
                            <FiLogIn />
                        </Button>

                    </Link>


                </Box>
            </Flex>
            <MyAlert />
        </Fragment>

    );
};

export default Header;
