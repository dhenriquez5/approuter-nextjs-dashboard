'use client'
import React, { useState } from 'react'

interface Props {
  value?: number
}
const Counter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-['100px'] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-['100px'] mr-2"
        >
          -1
        </button>
      </div>
    </>
  )
}

export default Counter
