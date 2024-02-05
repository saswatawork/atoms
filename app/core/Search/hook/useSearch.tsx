import {  ChangeEvent, useState, KeyboardEvent } from 'react'


export interface SearchOutputTypes {
 value:string,
 showSearch: boolean,
 openSearch: ()=>void,
 handleChange:(e:ChangeEvent<HTMLInputElement>)=>void,
 handleKeyDown:(e:KeyboardEvent<HTMLInputElement>)=>void
}

export interface SearchInputTypes {

    
}

export const useSearch=(initialValue:SearchInputTypes):SearchOutputTypes=>{
    const [value,setValue] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const openSearch = ()=>{
        setShowSearch(!showSearch)
        if(!showSearch){
            setValue('')
        }
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const handleKeyDown=(e:KeyboardEvent<HTMLInputElement>):void=>{
        if(e.code==='Enter'){
           console.log("xxx",value)
        }
    }

    return {
        openSearch,
        showSearch,
        handleChange,
        handleKeyDown,
        value
    } 
}