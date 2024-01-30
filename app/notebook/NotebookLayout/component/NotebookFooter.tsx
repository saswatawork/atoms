import Link from 'next/link'
import Image from 'next/image'
import { NOTEBOOK_PATH } from '../../config'
import './NotebookFooter.scss'
import { NewsLetter } from '../../newsletter'

export const NotebookFooter = ()=>{
    return (
        <footer className='notebook_footer'>
            <div className='footer_nav'>
                <div>
                    <h2><span>Note</span>book<b>.</b></h2>
                    <p>Did you come here for something in particular or just general Riker</p>
                </div>
                <div>
                    <h2>blogs</h2>
                    <ul>
                        <li><Link href={`${NOTEBOOK_PATH}/travel`}>travel</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/technology`}>technology</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/lifestyle`}>lifestyle</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/fashion`}>fashion</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/business`}>business</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>quick links</h2>
                    <ul>
                        <li><Link href={`${NOTEBOOK_PATH}/faq`}>FAQ</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/terms`}>Terms & conditions</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/support`}>support</Link></li>
                        <li><Link href={`${NOTEBOOK_PATH}/privacy`}>privacy policy</Link></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h2>Subscribe for newsletter</h2>
                        <NewsLetter/>
                    </div>
                    <div>
                        <h2>follow on:</h2>
                    </div>
                </div>
            </div>
            <div className='footer_copyright'></div>
        </footer>
    )
}