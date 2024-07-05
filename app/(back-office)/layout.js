import Header from '@/components/dashboard/Header'
import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-row inventory_dashboard_layout'>
      <div className="sidebar w-56 bg-slate-900 min-h-screen text-white">Sidebar</div>
      <main className="main_content w-full bg-slate-100 min-h-screen">
        <Header/>
        {children}
        </main>
      
    </div>
  )
} 

export default Layout
