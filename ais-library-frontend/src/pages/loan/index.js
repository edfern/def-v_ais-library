import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import NewLoan from './new';
import RestoreLoan from './restore';
import ViewLoan from './view';
import HistoryLoan from './history';

const RouterW = styled(Routes)`
  height: 100%;
`;

const HomeLoan = () => {
  return (
    <RouterW>
      <Route index path="new" element={<NewLoan />} />
      <Route index path="restore" element={<RestoreLoan />} />
      <Route index path="view" element={<ViewLoan />} />
      <Route index path="history" element={<HistoryLoan />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </RouterW>
  );
};

export default HomeLoan;
