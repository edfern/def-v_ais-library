import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Specimens } from './specimens';
import { Book } from './books';

const RouterW = styled(Routes)`
  height: 100%;
`;

const Books = () => {
  return (
    <RouterW>
      <Route index path="book" element={<Book />} />
      <Route path="specimens" element={<Specimens />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </RouterW>
  );
};
export default Books;
