import {
    Box, Button, Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem, MenuList, SimpleGrid, Text
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllProducts, getFilterProdByCat, getOrderByDate, getProductList } from '../actions';
import AddCart from './AddCart';
import Search from './Search';

const Products = () => {


    const [cookies, setCookie] = useCookies({
        "orders": {
            "items": [
                {
                    "product_id": "1",
                    "quantity": 1,
                    "price": 0,
                    "size": "XL"
                }
            ],
            "total_price": 0,
            "status": 0
        }
    });




    setCookie("orders", JSON.stringify(cookies.orders), { path: '/' });


    //   var myObject = JSON.parse('{"id":1,"gender":"male"}');
    //   var e = 'Thu Nov 26 2017 15:44:38'; document.cookie = 'myObj='+ JSON.stringify(myObject) +';expires=' + e;


    // console.log(JSON.stringify(myObject.orders));


    const dispatch = useDispatch()

    const dataProducts = useSelector(state => state.products)
    const dataCategory = useSelector(state => state.categories)
    // dispatch(getAllProducts())

    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getAllProducts())
    }, [])

    const getKeywords = (event) => {
        let key = event.target.value;
        dispatch(getProductList(key))
    }

    const [statecategoryFilter, setCategories] = useState("Categories")
    const [orderByDate, setorderByDate] = useState("Sort By")


    const getfilterCategory = (event) => {
        let category = event.target.value
        setCategories(event.target.name)
        dispatch(getFilterProdByCat(category))

    }
    const getOrByDate = (event) => {
        let date = event.target.value
        setorderByDate(event.target.name)
        dispatch(getOrderByDate(date))
    }

    const [baskets, setBasketPro] = useState({
        basket: {
            id: 0,
            price: 0,
            quantity: 0,
            size: "",
        },
        total_price: 0

    })

    const handelAdd = () => {

    }

    const renderProducts = (products) => {

        return (products.products ?
            products.products.map((item, index) => {
                return (

                    <div key={index}>

                        <Box px={2} py={2} maxW="sm" h="335px" w="250px" borderWidth="1px" rounded="lg" overflow="hidden" bg="#fafafa">
                            <Image h="190px" w="250px" src={item.image} alt={item.product_name} />

                            <Box p={0}>
                                <Text fontSize="2xl" color="#07b5b5" textAlign="center"
                                    fontWeight="bold" >{item.product_name} </Text>
                            </Box>

                            <Box my={0}>
                                <Text fontSize="2xl" mr={3} color="#069c9c" textAlign="right"
                                    fontWeight="bold" >P {item.price} </Text>
                            </Box>


                            <Flex px={3} my={0}>
                                <AddCart />

                            </Flex>

                        </Box>

                    </div>
                )



            })
            : null)

    }
    console.log(baskets)


    const renderCategories = (categories) => {

        return (categories.categories ?
            categories.categories.map((item, index) => {
                return (

                    <div key={index}>
                        <MenuItem value={item.id} name={item.name}>
                            {item.name}
                        </MenuItem>
                    </div >
                )
            })
            : null)


    }

    return (
        <div>
            <Box bg="#33bdba" p={4} mx="50px" my="30px" >
                <SimpleGrid templateColumns="repeat(5, 1fr)" gap={3}>
                    <Menu my="30px" >
                        <MenuButton as={Button} rightIcon="chevron-down">
                            {orderByDate}
                        </MenuButton>
                        <MenuList onClick={getOrByDate}>
                            <MenuItem name="Sort By" value="Sort By">Sort By</MenuItem>
                            <MenuItem name="Latest" value='date_created'>Latest</MenuItem>
                            <MenuItem name="Oldest" value='-date_created'>Oldest</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon="chevron-down">

                            <div>{statecategoryFilter == "Categories" ? "Categories" : statecategoryFilter}</div>

                        </MenuButton>
                        <MenuList onClick={getfilterCategory}>
                            <MenuItem name="Categories">Categories</MenuItem>
                            {renderCategories(dataCategory)}
                        </MenuList>

                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon="chevron-down">
                            Stores
                        </MenuButton>
                        <MenuList>
                            <MenuItem>KuMares Kitchen</MenuItem>
                            <MenuItem>Kuys J</MenuItem>
                            <MenuItem>Dories Kitchen</MenuItem>
                        </MenuList>
                    </Menu>
                    <Box w="100%" h="10" />

                    <Search keywords={getKeywords} />

                </SimpleGrid>
            </Box>


            <Box color="white" ml="50px" mr="20px" my="50px">
                <SimpleGrid minChildWidth="250px" columns={[2, null, 4]} spacing="10px">


                    {renderProducts(dataProducts)}

                </SimpleGrid>

            </Box>
        </div>
    )

}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getAllProducts }, dispatch)
// }

export default Products;