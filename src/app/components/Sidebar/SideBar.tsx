import Image from 'next/image'
import React from 'react'
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootballOutline,
  IoLogoReact,
} from 'react-icons/io5'
import SideBarMenuItem from './SideBarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline />,
    title: 'Dashboard',
    subTitle: 'Visualizar Dashboard',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator />,
    title: 'Counter',
    subTitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootballOutline />,
    title: 'Pokemons',
    subTitle: 'Lista de Pokemones Estatico',
  },
]

export const SideBar = () => {
  return (
    <div
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-auto"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center gap-1">
          <IoLogoReact />
          <span>
            Dash<span className="text-blue-500">8</span>.
          </span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              height={32}
              width={32}
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="Profile Icon"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            David Henriquez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SideBarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
