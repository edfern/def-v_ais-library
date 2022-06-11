import React from 'react';
import styled from 'styled-components';
import { Bar, Line } from 'react-chartjs-2';

import { IoIosPerson } from 'react-icons/io';
import { AiFillBook } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import { BiCalendarCheck } from 'react-icons/bi';

import { Wrap, WrapBody } from '../../components/container/index';
import { Col, Row } from '../../components/Row';

import { Widget } from '../../components/widget';
import { Card } from '../../components/card';
import { Title } from '../../components/typography/index';
import { SEO } from '../../components/seo';

const ContainerWidget = styled.div`
  width: 100%;
  padding: 10px;
`;
const ContainerChart = styled.div`
  width: 100%;
`;
const ContainerAChart = styled.div`
  top: 20px;
  width: 100%;
  display: block;
`;
const WrapAChartBody = styled.div`
  width: 80%;
`;
const WrapAChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeApp = () => {
  const data = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
    ],
    datasets: [
      {
        label: 'Maestros',
        data: [1, 2, 3, 4, 5, 6, 2, 8],
        backgroundColor: [
          'rgb(255, 99, 132, 0.6)',
          'rgb(54, 162, 235, 0.6)',
          'rgb(255, 206, 86, 0.6)',
          'rgb(75, 192, 192, 0.6)',
          'rgb(153, 102, 255, 0.6)',
          'rgb(255, 99, 132, 0.6)',
          'rgb(54, 162, 235, 0.6)',
          'rgb(153, 102, 255, 0.6)',
        ],
      },
      {
        label: 'Estudiantes',
        data: [10, 2, 5, 4, 8, 6, 9, 8],
        backgroundColor: [
          'rgb(153, 102, 255, 0.6)',
          'rgb(255, 206, 86, 0.6)',
          'rgb(75, 192, 192, 0.6)',
          'rgb(54, 162, 235, 0.6)',
          'rgb(255, 99, 132, 0.6)',
          'rgb(54, 162, 235, 0.6)',
          'rgb(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <Wrap>
      <SEO title="AIS | Dashboard" />
      <WrapBody>
        <ContainerWidget>
          <Row>
            <Col noCol={4}>
              <Widget
                color="#e29250"
                title="Estudiantes"
                number="68"
                description="Se han registrado"
                icon={<IoIosPerson />}
              />
            </Col>
            <Col noCol={4}>
              <Widget
                color="#085da2"
                title="Maestro"
                number="16"
                description="Se han registrado"
                icon={<GiTeacher />}
              />
            </Col>
            <Col noCol={4}>
              <Widget
                color="#6d12b0"
                title="Libros"
                number="8450"
                description="Base de datos"
                icon={<AiFillBook />}
              />
            </Col>
            <Col noCol={4}>
              <Widget
                color="#01b8d3"
                title="Prestamos"
                number="41"
                description="Registrados"
                icon={<BiCalendarCheck />}
              />
            </Col>
          </Row>
        </ContainerWidget>
        <ContainerChart>
          <Row>
            <Col noCol={2}>
              <Title
                text="Prestamos de los ultimos 6"
                type="initial"
                size="25px"
                padding="5px"
                dp="block"
                textA=""
              />
              <Card borderRadius="20px">
                <Bar
                  data={data}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Ultimos 6 meses',
                      },
                    },
                  }}
                />
              </Card>
            </Col>
            <Col noCol={2}>
              <Title
                text="Prestamos de los ultimos 6"
                type="initial"
                size="25px"
                padding="5px"
                dp="block"
                textA=""
              />
              <Card borderRadius="20px">
                <Bar
                  data={data}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Ultimos 6 meses',
                      },
                    },
                  }}
                />
              </Card>
            </Col>
          </Row>
        </ContainerChart>
        <ContainerAChart>
          <Title
            text="Prestamos de los ultimos 6"
            type="initial"
            size="25px"
            padding="5px"
            dp="block"
            textA=""
          />
          <WrapAChart>
            <WrapAChartBody>
              <Line
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: 'Ultimos 6 meses',
                    },
                  },
                }}
              />
            </WrapAChartBody>
          </WrapAChart>
        </ContainerAChart>
      </WrapBody>
    </Wrap>
  );
};

export default HomeApp;
