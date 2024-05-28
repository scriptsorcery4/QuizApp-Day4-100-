import React from 'react'
import Button from './ui/Button'
import { FaFire } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { NavLinks } from '../constant/Header'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'


function Header() {
    const { user } = useAuthContext();
    const location = useLocation()
    const { logout } = useLogout();

    const handleLogout = () => {
      logout();
    
    };
    return (
        <div className='shadow-sm fixed top-0 left-0 z-10 w-full bg-white'>
            <div className='max-w-[1400px] mx-auto flex justify-between items-center h-16'>
                <div className='flex gap-12 items-center'>
                    <Link to='/'>
                        <div className='flex items-center gap-2.5 font-bold'>
                            <img className='h-7' src="/logo.svg" alt="" />
                            <p className='text-2xl'>Quiz<span className='text-blue-500'>App</span></p>
                        </div>
                    </Link>
                    <ul className='flex gap-6 text-sm font-medium items-center'>
                        {NavLinks.map(link => (
                            <Link key={link.href} to={link.href}>
                                <li className={`
                                    hover:text-zinc-800 transition-colors
                                    ${link.href === location.pathname ? 'text-zinc-900' : 'text-zinc-500'}
                                `}>
                                    {link.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

                {user ? (
                    <div className='flex gap-4 items-center'>
                        <div className='flex items-center gap-1'>
                            <p className='font-bold text-blue-700 text-[18px] mt-[2px]'>{user.exp}</p>
                            <FaFire className='text-blue-700' />
                        </div>
                        <Button onClick={handleLogout} type='ghost' content='Logout' />
                    </div>
                ) : (
                    <div className='flex gap-3'>
                        <Link to='/singup'><Button type='ghost' content='Singup' /></Link>
                        <Link to='/login'><Button type='simple' content='Login' /></Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
