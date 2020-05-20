import React from 'react';
import Iframe from 'react-iframe';
import styled from 'styled-components';

export const Player = () => {
    return (
        <Iframe url="https://drip-radio.com/public/drip/embed"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
        )
}