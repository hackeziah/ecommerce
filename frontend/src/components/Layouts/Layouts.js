import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React, { Component } from 'react';
import Headers from './Headers';

class Layouts extends Component {

    render() {

        return (
            <div>
                <ThemeProvider>
                    <CSSReset />
                    <Headers />


                </ThemeProvider>
                {/* <Sliders /> */}
            </div>
        )
    }
}

export default Layouts
