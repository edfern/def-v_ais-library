import React from 'react';
import styled from 'styled-components'
import { Link, Router } from '@reach/router'

const RouterWrap = styled(Router)`
    height: 100%;
`
const LinkRo = styled(Link)`
    text-decoration: none;

`
export const LinkCustom = ({ children, to })=>(
    <LinkRo to={to}>{ children }</LinkRo>
)
export const RouterW = ({ children })=> (
    <RouterWrap> { children } </RouterWrap>
)