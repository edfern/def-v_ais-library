import styled from 'styled-components'

const Rows = styled.div`
    display: ${ props => props.dp};
    flex-wrap: wrap;
    justify-content: ${ props => props.jc };
    align-items: ${ props => props.ai};
`
const Cols = styled.div`
    width: calc((100% - 30px)/${props => props.noCol});
    text-align: ${props => props.ta};
    @media only screen and (max-width: 780px){
        width: 100%;
    }
`
export const Row = ({ children, display, alignItems, justifyContent }) => (
    <Rows dp={display} ai={alignItems} jc={justifyContent}>{ children }</Rows>
)

export const Col = ({ children, noCol, textA }) => (
    <Cols noCol={noCol} ta={textA}>{ children }</Cols>
)

Col.defaultProps ={
    noCol: 2
}

Row.defaultProps = {
    display: 'flex',
    alignItems: '',
    justifyContent: 'space-between',
}