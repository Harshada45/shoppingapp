import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish '>
                <Link className='navbar-link relative' href='#'>HOME</Link>
                <Link className='navbar-link relative' href='#'>CATEGORIES</Link>
                <Link className='navbar-link relative' href='#'>MEN'S</Link>
                <Link className='navbar-link relative' href='#'>WOMEN'S</Link>
                <Link className='navbar-link relative' href='#'>JEWELRY</Link>
                <Link className='navbar-link relative' href='#'>PERFUME</Link>
                <Link className='navbar-link relative' href='#'>BLOG</Link>
                <Link className='navbar-link relative' href='#'>HOT OFFERS</Link>



            </div>
        </div>
    </div>
  )
}

export default Navbar