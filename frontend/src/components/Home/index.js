import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import Sliders from '../Layouts/Sliders';
import Products from '../Products';


const Home = () => {
    // const producsts = useSelector(state => state.state)

    return (
        <div>

            <Sliders />
            <ThemeProvider>
                <CSSReset />
                <Products />

            </ThemeProvider>


        </div>
    )
}

export default Home;