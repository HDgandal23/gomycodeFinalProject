import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {

    const [open, setOpen] = useState(false)
  return (
    <header className='w-full fixed z-10 bg-black opacity-90'>

        <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
            <a href='/' className='flex items-center justify-center text-white text-lg cursor-pointer'>

                <img src={Logo} alt='logo' className='hidden md:block w-8 h-8 lg:w-14 lg:h-10' />
                Kay<span>-Tog</span>
            </a>
            <ul className='hidden md:flex text-white  gab-6'>
                <li className='px-2'>
                    <a href='/'>Home </a>
                </li> 
                
            </ul>

            <button className='block md:hidden text-white text-xl'
            
            onClick={() => setOpen(prev => !prev)}
            >
                {
                    open ? <AiOutlineClose/>: <HiMenuAlt3/>
                }

            </button>

        </nav>
        <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 
        text-white gap-6 text-[14px]`}>

            <a href='/'>Home</a>
            
        </div>
    </header>
  )
}

export default Navbar