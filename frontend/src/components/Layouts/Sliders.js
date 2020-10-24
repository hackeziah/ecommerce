// import React, { useEffect, useSelector, useState } from "react";

import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSliders } from '../../actions';
import SlidersCSS from '../../components/Layouts/SlidersCSS.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Sliders() {

    const dispatch = useDispatch()
    const sliders = useSelector(getAllSliders)
    useEffect(() => {
        dispatch(getAllSliders())
    }, [])

    const dataSliders = useSelector(state => state.sliders)

    const renderSliders = (sliders) => {

        return (sliders.sliders ?
            sliders.sliders.map((item, index) => {
                return (
                    <div width="100%" height="30%" key={index} data-src={item.image} />
                )
            })
            : null)

    }

    return (

        < div >

            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={3000}
                cssModule={SlidersCSS}

            >

                {renderSliders(dataSliders)}

            </AutoplaySlider>


        </div >
    )
}

export default Sliders;