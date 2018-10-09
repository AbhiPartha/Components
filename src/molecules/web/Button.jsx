import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Text from "../../atoms/web/Text";

const Wrapper = styled.button`
    border: none;
    background-color: lightblue;
    color: white
    padding: 8px;
    max-width: 200px;
`

class Button extends Component {

    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.array.isRequired
    }

    static defaultProps = {
        name: 'stranger', 
    }

    render () {

        return (
            <Wrapper>
                <Text>
                    {this.props.children}
                </Text>
            </Wrapper>
        )
    }
}


export default Button