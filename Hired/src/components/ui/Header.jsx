import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/hiddencopy.jpeg'
import { Button } from './button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link>
           <p className='font-bold text-3xl mt-4 ml-4'>Hired</p>
        </Link>
        <Button variant='outline'>Login</Button>
        {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      </nav>
    </>
  )
}

export default Header