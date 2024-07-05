import Header from '@/components/dashboard/Header'
import SideBar from '@/components/dashboard/SideBar'
import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-row inventory_dashboard_layout overflow-hidden'>
      <div className="sidebar w-56 bg-slate-800 min-h-screen text-white overflow-hidden"><SideBar/></div>
      <main className="main_content w-full bg-slate-100 min-h-screen overflow-y-auto">
        <Header/>
        {children}
        </main>
      
    </div>
  )
} 

export default Layout
