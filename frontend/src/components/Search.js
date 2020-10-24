import {
    Input, InputGroup
} from '@chakra-ui/core';
import React from 'react';
const Search = (props) => {
    return (
        <div>
            <InputGroup >
                <Input type="search" placeholder="Search" onChange={event => props.keywords(event)} />
            </InputGroup>
        </div>
    )
}

export default Search;
