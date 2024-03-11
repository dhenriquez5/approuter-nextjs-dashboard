import Counter from '@/app/components/Counter/Counter'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Page For Counter',
}

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <Counter value={10} />
    </div>
  )
}

export default CounterPage
