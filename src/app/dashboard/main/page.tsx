import { WidgetGrid } from '@/components/Counter/WidgetGrid'
import React from 'react'

export const metadata = {
  title: 'AdminDashboard',
  description: 'AdminDashboard',
}
const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl"> Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetGrid />
    </div>
  )
}

export default MainPage
