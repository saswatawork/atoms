import { InputHTMLAttributes } from "react"
import { useNewsLetter } from "../hook/useNewsLetter"
import './NewsLetter.scss'

export const NewsLetter = ()=>{
    const {value,onHandleChange, submitNewsletter} = useNewsLetter()
    return(
        <div className="news_letter">
            <form onSubmit={submitNewsletter}>
                <input  value={value} onChange={onHandleChange} type="email" placeholder="Your Email"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}