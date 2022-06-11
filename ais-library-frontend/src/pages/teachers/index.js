import React, { useRef, useState } from 'react'
import { Operations, Wrap, WrapBody, WrapHead } from '../../components/container';
import { UseContextSearchProvider } from '../../context/useContextSearch';
import { AiOutlinePlus } from 'react-icons/ai'

import { SearchType } from '../../components/search/index'
import { ButtonNew } from '../../components/button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../static/fade.css'
import { Card, CardBody, CardHead } from '../../components/card';
import { FormTeacher } from '../../components/form/formTeacher';



const Teacher = ({ isOpen, data, closeSuccess, edit }) => (
    <Card className="fade" borderColor="#00d0ff" borderTop="border" borderRadius="20px" position="relative">
        <CardHead
            isOpen={isOpen}
        />
        <CardBody>
            <CardHead iconClose={false}
                title="Información del maestro"
                jc="space-between"
                edit={edit}
                id={data.idTeacher}
                color="#00d0ff"
            />
            <FormTeacher edit={edit} data={data} open={closeSuccess} />
        </CardBody>
    </Card>

)

const Teachers = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState({})
    const [type, setType] = useState(false)
    const refForm = useRef(null)

    const handleClickSearch = ({ item }) => {
        setState(true)
        setData(item)
        setType(true)
    }
    const handleClickNewTeacher = () => {
        setState(true)
        setType(false);
    }
    return (
        <Wrap>
            <WrapHead title="Mestros" />
            <WrapBody>
                <UseContextSearchProvider>
                    <SearchType
                        onClick={handleClickSearch}
                        textPlaceholder="Buscar maestros"
                        type="teachers"
                        description="Ingresa nombre o apellidos del maestro."
                    />
                </UseContextSearchProvider>
                <Operations>
                    <ButtonNew onClick={handleClickNewTeacher}>Nuevo <AiOutlinePlus /></ButtonNew>
                </Operations>
                <TransitionGroup>
                    {state &&
                        <CSSTransition
                            in={true}
                            timeout={200}
                            nodeRef={refForm}
                            classNames="fade"
                        >
                            <div ref={refForm}>
                                <Teacher
                                    edit={type}
                                    data={data}
                                    closeSuccess={() => setState(false)}
                                    isOpen={() => setState(false)}
                                />
                            </div>
                        </CSSTransition>}
                </TransitionGroup>
            </WrapBody>
        </Wrap>
    )
}

export default Teachers;