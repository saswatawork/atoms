import { InputHTMLAttributes } from "react"
import './NewsLetter.scss'

export const NewsLetter = ()=>{
    return(
        <div>
            <form>
                <input  value='' type="text" placeholder="Your Email"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}