import {
    Box,
    Button, CSSReset, Flex,
    FormControl,
    FormLabel,
    Heading,
    Input, SimpleGrid,
    ThemeProvider
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
// if (isAuthenticated)
//     return <Redirect to='/' />;
// import Alert from '../Alert';


const Login = ({ setAlert }) => {


    const [formData, setLoginForm] = useState({
        email: '',
        password: ''
    });


    const { email, password } = formData;

    const onChange = e => setLoginForm({ ...formData, [e.target.name]: e.target.value });

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(formData))
        e.target.reset();
        setLoginForm({
            email: '',
            password: ''
        })

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
                        {/* <MyAlert /> */}
                        <Box textAlign="center">
                            <Heading>Login</Heading>
                        </Box>
                        <Box my={5} mx={5} textAlign="left">
                            <form onSubmit={e => onSubmit(e)}>
                                <SimpleGrid columns={[1, null, 1]} spacing={5}>
                                    <FormControl>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" size="sm"
                                            name='email'
                                            value={email}
                                            onChange={e => onChange(e)}
                                            placeholder="" />
                                    </FormControl>

                                </SimpleGrid>

                                <SimpleGrid columns={[1, null, 1]} spacing={5}>
                                    <FormControl mt={2}>
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password"
                                            name='password'
                                            value={password}
                                            onChange={e => onChange(e)}
                                            size="sm" placeholder="" />
                                    </FormControl>
                                </SimpleGrid>
                                <Button type="submit" variantColor="teal" variant="outline" width="full" mt={5}>
                                    Sign In
                            </Button>
                            </form>
                        </Box>
                        {/* {alertShow.show ? <Alert title={alertShow.title} description={alertShow.description} status={alertShow.status} /> : null} */}

                    </Box>
                </Flex>

            </ThemeProvider>

        </div>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired
};


// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// })

export default connect(null, { setAlert })(Login);


