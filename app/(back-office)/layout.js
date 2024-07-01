import Header from '@/components/dashboard/Header'
import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-row'>
      <div className="sidebar w-56 bg-slate-900 min-h-screen text-white">Sidebar</div>
      <main className="sidebar w-full bg-slate-300 min-h-screen">
        <Header/>
        {children}
        </main>
      
    </div>
  )
} 

export default Layout
