import React from 'react'
import Header from './Header/Header'
import './style.scss'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">{children}</main>
    </>
  )
}

export default Layout
