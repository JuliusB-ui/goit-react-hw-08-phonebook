import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {Header} from './Header/Header'

import React from 'react'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
    </div>
  )
}
