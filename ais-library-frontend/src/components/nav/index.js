import React from 'react'
import styled from 'styled-components'

import { FaSignInAlt } from 'react-icons/fa'
import UseUser from '../../hooks/useUser'

const NavBar = styled.nav`
    z-index: 1;
    height: 60px;
    background: #f8f8f8;
    display: flex;
    justify-content: space-between;
    padding: 10px 100px;
    align-items: center;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 19%);
    width: 100%;
    position: fixed;
    @media only screen and (max-width: 500px){
        padding: 10px 50px;
    }
`

const Title = styled.span`
    font-size: 25px;
    color: black;
`
const SignIn = styled.span`
    font-size: 15px;
    color: black;
    align-items: center;
    display: flex;
    white-space: break-spaces;
    &:hover{
        color: #315474;
        cursor: pointer;
    }
`

export const Nav = () => {
    const { logout } = UseUser();

    const handleClick = () =>{
        logout()
    }

    return(
        <NavBar>
            <Title>Dashboard</Title>
            <SignIn onClick={handleClick}>Cerrar sesion <FaSignInAlt/></SignIn>
        </NavBar>
    )
}