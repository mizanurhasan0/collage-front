import NavLink from '@/app/(home)/Navlink';
import { Category, LeftArrow, Overview, Products } from '@/assets';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Menus = [
  {
    name: "Shop", path: NavLink.SHOP, icon: Overview, child: [
      { name: "Blog", path: NavLink.BLOG, icon: Products },
      { name: "About", path: NavLink.ABOUT, icon: Category },]
  },
  { name: "Blog", path: NavLink.BLOG, icon: Products },
  { name: "About", path: NavLink.ABOUT, icon: Category },
  { name: "Contact", path: NavLink.CONTACT, icon: Category },
]

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 bg-base1 min-h-[4rem] flex w-full border-t border-t-gray-500 border-b-2  border-b-blue-500  z-50">
      <div className="container text-[1.25rem] uppercase mx-auto flex items-center justify-between text-base3">
        <div className="flex space-x-8 h-full">
          <div className="flex items-center space-x-4">
            {Menus.map((m, i) => (
              <div key={i} className={`${pathName === m.path ? 'border-b border-base3 text-base3' : ''} relative group h-full flex items-center`}>
                <div className="flex items-center space-x-1">
                  <Link href={m?.child ? '#' : m.path} className="cursor-pointer">{m.name}</Link>
                  {m?.child ? <LeftArrow className="w-5 h-5 -rotate-90" /> : ''}
                </div>
                {/* Child Menu */}
                {m?.child ? (<div className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 absolute bg-base2 whitespace-nowrap py-2 px-4 space-y-2 rounded-b-md top-16 transition-all duration-300 text-base6 capitalize">
                  {m.child.map((m2, i) => (
                    <Link href={m2.path} key={i} className="cursor-pointer hover:text-base3 block">{m2.name}</Link>
                  ))}
                </div>) : ''}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <User className="stroke-base4 w-7 h-7 cursor-pointer" onClick={() => navigate.push('/profile')} /> */}
          <div className="relative cursor-pointer">
            Login
          </div>
        </div>
      </div>
    </div>
  )
}
