import React from 'react';
import Layout from '../components/Layouts/Layouts';
const Layouts = (props) => {
    return (
        <div>
            <Layout />
            {props.children}
        </div>
    )
}

export default Layouts;
