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
        <div className="SearchArea" >
            <div  className={showSearch ? 'showSearchBox' : 'hideSearchBox'}>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text"/>
                <Image className="searchIcon" src={SearchIcon} onClick={openSearch} alt="search"/>
            </div>
        </div>
    )
}