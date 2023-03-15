import React from 'react';

import { Routes as RoutesConfig, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import PageNotFound from '../pages/pageNoFound/PageNotFound';
import ScanResults from '../pages/scanResults/ScanResults';
import NewScanResult from '../pages/newScanResult/NewScanResult';
import DetailScanResult from '../pages/detailScanResult/DetailScanResult';

const Routes = () => {
  return (
    <RoutesConfig>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewScanResult />} />
      <Route path='/results' element={<ScanResults />} />
      <Route path='/results/:id' element={<DetailScanResult />} />
      <Route path='*' element={<PageNotFound />} />
    </RoutesConfig>
  );
};

export default Routes;
