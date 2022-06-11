import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const TitleComponent = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    text-transform: ${(props) => props.type};
    text-align: ${ props => props.textA};
    padding: ${(props) => props.padding};
    width: 100%;
    display: ${props => props.dp};
    @media only screen and (max-width:780px){
        padding: 0 0 10px 0;
        
    }
    @media only screen and (max-width: 500px){
        font-size: 15px;
    }
`

export const Title = ({ color, size, type, padding, text, dp, textA }) => (
    <TitleComponent color={ color } size={ size } type={ type } padding={ padding } dp={dp} textA={textA}> { text }</TitleComponent>
)

Title.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    padding: PropTypes.string,
    text: PropTypes.string,
    dp: PropTypes.string,
    textA: PropTypes.string, 
}

Title.defaultProps = {
    text: '',
    color: '#606060',
    size: '10px',
    type: 'capitalize',
    padding: '0',
    dp: '',
    textA: 'center',
}