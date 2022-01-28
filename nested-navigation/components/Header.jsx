import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div style={{display : 'inline'}} className='header'>
            <Link href='/home' >Home</Link>
            <Link href='/dashboard' >Dashboard</Link>
            <Link href='/profile' >Profile</Link>
        </div>
    )
}
