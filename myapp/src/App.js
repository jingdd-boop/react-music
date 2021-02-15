import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config'
import {HashRouter} from 'react-router-dom'


import routes from './router'

import LJAppHeader from '@/components/app-header';
import LJAppFooter from '@/components/app-footer';


function App() {
  return (
    <HashRouter>
      <LJAppHeader />
      {renderRoutes(routes)}
      <LJAppFooter />
    </HashRouter>
  )
}

export default memo(App)
//rmc

