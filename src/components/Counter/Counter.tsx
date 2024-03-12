'use client'
import {
  SubstractOne,
  addOne,
  initCounterState,
} from '@/store/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useEffect } from 'react'

interface Props {
  value?: number
}

export interface CounterResponse {
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch(`/api/counter`).then((response) => response.json())
  console.log(data)
  return data
}

const Counter = ({ value = 0 }: Props) => {
  const { count } = useAppSelector((state) => state.counterReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then((data) => dispatch(initCounterState(data.count)))
  }, [dispatch])

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex items-center justify-center">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-['100px'] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(SubstractOne())}
          className="flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-['100px'] mr-2"
        >
          -1
        </button>
      </div>
    </>
  )
}

export default Counter
