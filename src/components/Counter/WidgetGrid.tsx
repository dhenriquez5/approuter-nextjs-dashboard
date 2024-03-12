'use client'
import { useAppSelector } from '@/store/store'
import { SimpleWidget } from './SimpleWidget'
import { IoCafeOutline, IoCartOutline } from 'react-icons/io5'

export const WidgetGrid = () => {
  const { count } = useAppSelector((state) => state.counterReducer)

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={count.toString()}
        subTitle={'subtitle1'}
        label="Contador"
        icon={<IoCartOutline size={30} className="text-blue-500" />}
        href="/dashboard/counter"
      />
      <SimpleWidget
        title={'title2'}
        subTitle={'subtitle2'}
        label="Label"
        icon={<IoCafeOutline size={30} className="text-blue-500" />}
      />
    </div>
  )
}
