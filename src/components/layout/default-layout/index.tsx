import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./header"

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="page__content">
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default DefaultLayout
