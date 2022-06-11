import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
    overflow-x:auto;
`
const TableCustom = styled.table`
    width: 100%;
    border-spacing: 0 10px;
    &::-webkit-scrollbar{
        width: 5px;
    }
`
const THead = styled.thead`
    text-align: left;
`
const Tr = styled.tr`
    background: #f7f7f7;
    border-radius: 5px;
    box-shadow: 1px 2px 5px rgb(0 0 0 / 10%);
    &:hover{
        cursor: pointer;
        box-shadow: 1px 2px 5px rgb(0 0 0 / 20%);
    }
`
const Th = styled.th`
    padding: 0px 15px;
`
const TBody = styled.tbody`
`
const Td = styled.td`
    padding: 0px 15px;
    &:nth-child(1){
        border-radius: 5px 0 0 5px;
    }
    &:nth-last-child(1){
        border-radius: 0 5px 5px 0;
    }
`
export const TableSearch = ({ header, body, getItem, setOpen }) => {

    const handleClickItem = ({ item }) => {
        const { type } = body;
        getItem({ item, type })
        setOpen()
    }
    return (
        <Container>
            <TableCustom>
                <THead>
                    <tr>
                        {header && header.map((item, index) => {
                            return (
                                <Th key={index}>{item}</Th>
                            )
                        })}
                    </tr>
                </THead>
                <TBody>
                    {body && body.data.map((item, index) => {
                        return (
                            <Tr key={index} onClick={()=>handleClickItem({ item })}>
                                <Td>{item.idStudent}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.surname}</Td>
                                <Td>{item.email}</Td>
                            </Tr>
                        )
                    })}
                </TBody>
            </TableCustom>
        </Container>
    )
}

