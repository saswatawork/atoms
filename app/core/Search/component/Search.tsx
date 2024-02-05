import { InputHTMLAttributes } from "react";
import Image from "next/image";
import { SearchIcon } from "../../Icons";
import './Search.scss'
import {useSearch} from "./../hook/useSearch" 

interface SearchProps extends InputHTMLAttributes<HTMLInputElement>{

}

export const Search =():JSX.Element=>{
    const {openSearch, showSearch,handleChange,handleKeyDown,value}=useSearch('');
    return(
        <div className="search_area" >
            <div  className={showSearch ? 'show_search_box' : 'hide_search_box'}>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text"/>
                <Image className="search_icon" src={SearchIcon} onClick={openSearch} alt="search"/>
            </div>
        </div>
    )
}