import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
        <div><Sidebar/></div>
        <div>
            <Navbar/>
            {children}
        </div>
    </>
  )
}

export default Layout