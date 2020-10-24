import {
    Alert,
    AlertDescription, AlertIcon,
    AlertTitle, CloseButton
} from "@chakra-ui/core";
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
const MyAlert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (

    <div key={alert.id}>
        <Alert status={alert.alertType}>
            <AlertIcon />
            <AlertTitle mr={2}>{alert.title}</AlertTitle>
            <AlertDescription>{alert.msg}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
    </div>

));
MyAlert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(MyAlert);