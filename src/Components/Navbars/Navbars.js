import React from 'react'
import "../Navbars/Navbars.css"
import Logo from "../../astets/navbar_img/icons8-thread-50 (2).png"
import Coll from "../../astets/navbar_img/icons8-phone-100 (1).png"
import Language from '../../astets/navbar_img/icons8-language-50.png'
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
  } from '@headlessui/react'
  import { HomeIcon, CogIcon, BuildingStorefrontIcon, CarIcon } from '@heroicons/react/24/outline';

  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
  
  const navigation = [
	{ name: 'Home', href: '', current: true },
	{ name: 'About', href: '#About', current: false },
	{ name: 'Products', href: '#Products', current: false },
	{ name: 'Partners', href: '#Partners', current: false },
	{ name: 'Leave a request', href: '#Leave', current: false },
	{ name: 'Contact', href: '#', current: false },
  ]
  
  function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }

export const Navbars = () => {
	return (
		<Disclosure as="nav" className="bg-gray-800  fixed top-0 left-0 right-0 z-50">
		  {({ open }) => (
			<>
			  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 navbarbac">
				<div className="relative flex h-16 items-center justify-between">
				  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
					{/* Mobile menu button*/}
					<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
					  <span className="absolute -inset-0.5" />
					  <span className="sr-only">Open main menu</span>
					  {open ? (
						<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
					  ) : (
						<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
					  )}
					</DisclosureButton>
				  </div>
				  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div className="flex flex-shrink-0 items-center">
						<h1 className='power' >POWER</h1>
					  <img
						className="h-8 w-auto logo"
						src={Logo}
						alt="Your Company"
					  />
					  <h1 className='power'>YARN</h1>
					</div>
					<div className="hidden sm:ml-6 sm:block">
					  <div className="flex space-x-4  navbtn">
						{navigation.map((item) => (
						  <a
							key={item.name}
							href={item.href}
							className={ classNames(
							  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white ',
							  'rounded-md px-3 py-2 text-sm font-medium',
							)}
							aria-current={item.current ? 'page' : undefined}
						  >
							{item.name}
						  </a>
						))}
					  </div>
					</div>
				  </div>
				  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				  <Menu as="div" className="relative ml-3">
					  <div>
						<MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						  <span className="absolute -inset-1.5" />
						  <span className="sr-only">Open user menu</span>
						  <img
							className="h-8 w-8 rounded-full"
							src={ Language}
							alt=""
						  />
						  
						</MenuButton>
					  </div>
					  <Transition
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					  >
						<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						  <MenuItem>
							{({ focus }) => (
							  <a
								
								className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
							  >
								Eng
							  </a>
							)}
						  </MenuItem>
						  <MenuItem>
							{({ focus }) => (
							  <a
								href="hello@ipak.com"
								className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
							  >
								Rus
							  </a>
							)}
						  </MenuItem>
						  <MenuItem>
							{({ focus }) => (
							  <a
								href="https://yandex.uz/maps/org/power_yard/58499813547/?l=sat%2Cskl&ll=30.368788%2C59.955385&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=16VEDyMhttps://yandex.uz/maps/-/CDvVQON-"
								className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
							  >
								Uzb
							  </a>
							)}
						  </MenuItem>
						</MenuItems>
					  </Transition>
					</Menu>
	
					{/* Profile dropdown */}
					<Menu as="div" className="relative ml-3">
					  <div>
						<MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						  <span className="absolute -inset-1.5" />
						  <span className="sr-only">Open user menu</span>
						  <img
							className="h-8 w-8 rounded-full"
							src={Coll}
							alt=""
						  />
						  
						</MenuButton>
					  </div>
					  <Transition
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					  >
						<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						  <MenuItem>
							{({ focus }) => (
							  <a
								href="+998330772077"
								className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
							  >
								Phone Nuber
							  </a>
							)}
						  </MenuItem>
						  <MenuItem>
							{({ focus }) => (
							  <a
								href="hello@ipak.com"
								className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
							  >
								Email
							  </a>
							)}
						  </MenuItem>
						  <MenuItem>
							{({ focus }) => (
							  <a
								href="https://yandex.uz/maps/org/power_yard/58499813547/?l=sat%2Cskl&ll=30.368788%2C59.955385&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=16VEDyMhttps://yandex.uz/maps/-/CDvVQON-"
								className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
							  >
								Location
							  </a>
							)}
						  </MenuItem>
						</MenuItems>
					  </Transition>
					</Menu>
				  </div>
				</div>
			  </div>
	
			  <DisclosurePanel className="sm:hidden">
				<div className="space-y-1 px-2 pb-3 pt-2">
				  {navigation.map((item) => (
					<DisclosureButton
					  key={item.name}
					  as="a"
					  href={item.href}
					  className={classNames(
						item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block rounded-md px-3 py-2 text-base font-medium',
					  )}
					  aria-current={item.current ? 'page' : undefined}
					>
					  {item.name}
					</DisclosureButton>
				  ))}
				</div>
			  </DisclosurePanel>
			</>
		  )}
		</Disclosure>
	  )
}
 