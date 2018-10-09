import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";

const SpinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Wrapper = styled.div`
    height: ${(props) => props.main ? "100vh" : "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
`

const GifLoader = styled.div`
    height: 30px;
    width: 30px;
    border: 5px solid #E0E0E0;
    border-top: 5px solid #424242;
    border-radius: 50%;
    animation: ${SpinAnimation} 1s linear infinite;
    margin: 0 auto;
`


class Loader extends Component {

    static propTypes = {
        main: PropTypes.bool,
    }

    static defaultProps = {
        main: true, 
    }

    render () {

        return (
            <Wrapper>
                <GifLoader />
            </Wrapper>
        )
    }
}

export default Loader