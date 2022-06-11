import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


const Wrap = styled.div`
    width: 560px;
    padding-bottom: 160px;
    padding-top: 50px;
    @media only screen and (max-width:780px){
        padding-top: 0;
    }
`

const FormComponent = styled.form`
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
`

const InputContentComponent = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: 50%;
    height: 75px;
    border-bottom: none;
    background-color: #563d1336;
    box-sizing: border-box;
    backdrop-filter: blur(5px);
    @media only screen and (max-width:780px){
        width: 100%;
    }
`

const InputComponentLeft = styled(InputContentComponent)`
    border-top-left-radius: 12px;
    border-right: 0.1px solid #0000005e;
    @media only screen and (max-width:780px){
        border-top-right-radius: 12px;
        border-right: none;
    }
`

const InputComponentRight = styled(InputContentComponent)`
    border-top-right-radius: 12px;
    @media only screen and (max-width:780px){
        border-top-right-radius: 0px;
    }
`
const LabelComponent = styled.span`
    font-family: 'Open Sans', sans-serif;
    text-transform: capitalize;
    font-size: 15px;
    color: #fffcfc;
    line-height: 1.2;
    display: block;
    position: absolute;
    pointer-events: none;
    width: 100%;
    padding-left: 30px;
    left: 0;
    top: 28px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    @media only screen and ( max-width: 780px ){
        text-align: center;
        padding-left: 0;
    }
`

const InputComponent = styled.input`
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: white;
    line-height: 1.2;
    display: block;
    width: 100%;
    background: transparent;
    padding: 0 30px;
    height: 100%;
    outline: none;
    border: none;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    &:focus{
        height: 55px;
    }
    &:focus + ${LabelComponent}{
        top: 10px;
        font-size: 13px;
        color: #111111;
    }
    ${props => props.hasVal === true  && css `
        height: 55px !important;
        + ${LabelComponent}{
            top: 10px;
            font-size: 13px;
            color: #111111;
        }
    `}
    @media only screen and ( max-width: 780px ){
        text-align: center;
    }
`
const ContentBtnForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

const BtnForm = styled.button`
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: white;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 70px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    overflow: hidden;
    background: #111111;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    position: relative;
    z-index: 1;
    outline: none !important;
    border: none;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
    &:hover:before{
        opacity: 1;
    }
    &::before{
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: #0E2F40;
        background: -webkit-linear-gradient(right, #312424, #0E2F40);
        background: -o-linear-gradient(right,  #312424, #0E2F40);
        background: -moz-linear-gradient(right,  #312424, #0E2F40);
        background: linear-gradient(to right,  #312424, #0E2F40);
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
    }
`
const HasValComponent = styled.input`
    height: 55px !important;
`
export const HasVal = () =>(
    <HasValComponent></HasValComponent>
)

export const WrapLogin = ({ children }) => (
    <Wrap>{ children }</Wrap>
)
WrapLogin.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Form = ({ children, onSubmit }) => (
    <FormComponent onSubmit={onSubmit}>{ children }</FormComponent>
)
Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
}
export const InputContentLeft = ({ children }) => (
    <InputComponentLeft>{ children }</InputComponentLeft>
)
InputContentLeft.propTypes = {
    children: PropTypes.node.isRequired,
}
export const InputContentRight = ({ children }) => (
    <InputComponentRight>{ children }</InputComponentRight>
)
InputContentRight.propTypes = {
    children: PropTypes.node.isRequired,
}
export const Label = ({ text }) => (
    <LabelComponent>{ text }</LabelComponent>
)
Label.propTypes = {
    text: PropTypes.string.isRequired,
}
Label.defaultProps = {
    text: '',
}

export const Input = ({ type, ref, value, onChange, hasVal}) => (
    <InputComponent type={type} ref={ref} onChange={onChange} value={value} hasVal={hasVal} required/>
)
Input.propTypes = {
    type: PropTypes.string.isRequired,
    ref: PropTypes.node,
    change: PropTypes.func,
    value: PropTypes.string,
}
Input.defaultProps = {
    type: '',
}
export const ContentBtn = ({ children }) => (
    <ContentBtnForm>{ children }</ContentBtnForm>
)
ContentBtn.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Button = ({ text }) => (
    <BtnForm>{ text } </BtnForm>
)

Button.propTypes = {
    text: PropTypes.node.isRequired,
}



