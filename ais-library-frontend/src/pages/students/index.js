import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ScrollingProvider, Section } from 'react-scroll-section';

import {
  Operations,
  Wrap,
  WrapBody,
  WrapHead,
} from '../../components/container';
import { SearchType } from '../../components/search';
import { UseContextSearchProvider } from '../../context/useContextSearch';

import { Card, CardBody, CardHead } from '../../components/card';
import { FormStudent } from '../../components/form/formStudent';
import { CSSTransition } from 'react-transition-group';

import '../../static/fade.css';
import { ButtonNew } from '../../components/button';

const Student = ({ open, edit, data, closeSuccess }) => {
  return (
    <Card
      className="fade"
      borderColor="#ffde82"
      borderTop="border"
      borderRadius="20px"
      position="relative"
    >
      <CardHead isOpen={open} />
      <CardBody>
        <CardHead
          iconClose={false}
          title="Información del estudiante"
          jc="space-between"
          edit={edit}
          id={data.idStudent}
          color="#ffde82"
        />
        <FormStudent edit={edit} data={data} open={closeSuccess} />
      </CardBody>
    </Card>
  );
};

const Students = () => {
  const [data, setData] = useState({});
  const [state, setState] = useState(false);
  const [type, setType] = useState(false);
  const nodeRef = React.useRef(null);

  const handleClick = ({ item }) => {
    setState(true);
    setData(item);
    setType(true);
  };

  const handleClickNewStudent = () => {
    setState(true);
    setType(false);
  };
  const close = () => {
    setState(false);
  };

  return (
    <Wrap>
      <WrapHead title="Estudiantes" />
      <WrapBody>
        <UseContextSearchProvider>
          <ScrollingProvider>
            <SearchType
              onClick={handleClick}
              textPlaceholder="Buscar estudiante"
              type="students"
            />
            <Operations>
              <ButtonNew onClick={handleClickNewStudent}>
                Nuevo <AiOutlinePlus />
              </ButtonNew>
            </Operations>
            <Section id="student">
              <CSSTransition
                in={state}
                timeout={300}
                classNames="fade"
                unmountOnExit
                nodeRef={nodeRef}
              >
                <div ref={nodeRef}>
                  <Student
                    open={close}
                    edit={type}
                    data={data}
                    closeSuccess={() => setState(false)}
                  />
                </div>
              </CSSTransition>
            </Section>
          </ScrollingProvider>
        </UseContextSearchProvider>
      </WrapBody>
    </Wrap>
  );
};

export default Students;
