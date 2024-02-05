import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { NOTEBOOK_PATH } from '../../config'
import { Edit } from '@/app/core/Icons'
import './NotebookHeader.scss'
import { Search } from '@/app/core/Search'



export const NotebookHeader = ()=>{
    const pathname = usePathname()
    return (
        <header className='notebook_header'>
            <ul>
                <li><Link className={`${pathname === NOTEBOOK_PATH? 'active' : ''}`} href={NOTEBOOK_PATH}>Home</Link></li>
                <li><Link className={`${pathname === `${NOTEBOOK_PATH}/about` ? 'active' : ''}` } href={`${NOTEBOOK_PATH}/about`}>About</Link></li>
                <li><Link className={`${pathname ===`${NOTEBOOK_PATH}/categories`? 'active' : '' }`} href={`${NOTEBOOK_PATH}/categories`}>Categories</Link></li>
                <li><Link className={`${pathname ===`${NOTEBOOK_PATH}/pages`? 'active' : '' }`} href={`${NOTEBOOK_PATH}/pages`}>Pages</Link></li>                
            </ul>
            <h1><span>Note</span>Book<b>.</b></h1>
            <ul>
                <li><span className='search_wrapper'><Search/></span></li>
                <li><Link className={`${pathname ===`${NOTEBOOK_PATH}/write`? 'active' : '' }`} href={`${NOTEBOOK_PATH}/write`}> <Image src={Edit} alt="write a blog"/></Link></li>
                <li><Link className={`${pathname ===`${NOTEBOOK_PATH}/contact`? 'active' : '' }`} href={`${NOTEBOOK_PATH}/contact`}>Contact</Link></li>
                <li><span>En</span></li>
                <li><span>Theme</span></li>
            </ul>
        </header>
    )
}