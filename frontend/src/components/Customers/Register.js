import {
    Box,
    Button, CSSReset, Flex,
    FormControl,
    FormLabel,
    Heading,
    Input, SimpleGrid, ThemeProvider, useToast
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { register } from '../../actions';
import { setAlert } from '../../actions/alert';

const Register = ({setAlert}) => {
    const toast = useToast();
    const [formData, setRegForm] = useState({
        username: '',
        password: '',
        password2: '',
        address: '',
        last_name: '',
        first_name: '',
        mobile_number: '',
        email: ''
    });


    const { username, email, password, password2, address, last_name, first_name, mobile_number } = formData;

    const onChange = e => setRegForm({ ...formData, [e.target.name]: e.target.value });

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Error Found','Your password must same as confirm password', 'error');
            
        }
        else {
            dispatch(register(formData));
            e.target.reset();
            setRegForm({
                username: '',
                password: '',
                password2: '',
                address: '',
                last_name: '',
                first_name: '',
                mobile_number: '',
                email: ''
            })
            setAlert('Registered Done','You are now Registered','success')
 
        }

    };



    return (
        <div>
            <ThemeProvider>
                <CSSReset />
                <Flex width="full" align="center" justifyContent="center">
                    <Box mt={6} p={2} color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        bajk
                        backgroundColor='#E9FFFA'
                        ml="2">

                        <Box textAlign="center">
                            <Heading>Register</Heading>
                        </Box>
                        <Box my={5} mx={5} extAlign="left">
                            <form id="registerForm" onSubmit={e => onSubmit(e)}>
                                <SimpleGrid columns={[1, null, 2]} spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            name='first_name'
                                            value={first_name}
                                            onChange={e => onChange(e)}
                                            placeholder="" roundedLeft="0"
                                            size="sm" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input name='last_name'
                                            value={last_name}
                                            onChange={e => onChange(e)}
                                            placeholder="" roundedLeft="0"
                                            size="sm" />
                                    </FormControl>
                                </SimpleGrid>

                                <SimpleGrid columns={[1, null, 2]} spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input name='email'
                                            value={email}
                                            onChange={e => onChange(e)}
                                            placeholder="" roundedLeft="0"
                                            size="sm" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Mobile No. </FormLabel>
                                        <Input
                                            name='mobile_number'
                                            value={mobile_number}
                                            onChange={e => onChange(e)}
                                            placeholder="" roundedLeft="0"
                                            size="sm" />
                                    </FormControl>
                                </SimpleGrid>
                                <FormControl isRequired>
                                    <FormLabel>Address</FormLabel>
                                    <Input
                                        name='address'
                                        value={address}
                                        onChange={e => onChange(e)}
                                        placeholder="" roundedLeft="0"
                                        size="sm" />
                                </FormControl>

                                <SimpleGrid columns={[1, null, 1]} spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Username</FormLabel>
                                        <Input
                                            name='username'
                                            value={username}
                                            onChange={e => onChange(e)}
                                            placeholder="" roundedLeft="0"
                                            size="sm" />
                                    </FormControl>

                                </SimpleGrid>


                                <SimpleGrid columns={[1, null, 2]} spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <Input name='password'
                                            value={password}
                                            type="password"
                                            onChange={e => onChange(e)}
                                            placeholder="" roundedLeft="0"
                                            size="sm" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Confirm Password </FormLabel>
                                        <Input name='password2'
                                            value={password2}
                                            onChange={e => onChange(e)}
                                            type="password" placeholder=""
                                            roundedLeft="0" size="sm" />
                                    </FormControl>
                                </SimpleGrid>

                                <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                                    Register

                                    
                            </Button>
                           
                            </form>
                        </Box>
                    </Box>                         
                    
                        </Flex>
            </ThemeProvider>

        </div>
    )
}



Register.propTypes = {
    setAlert: PropTypes.func.isRequired
};


// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// })

export default connect(null, { setAlert })(Register);


