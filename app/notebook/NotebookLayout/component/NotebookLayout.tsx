"use client"

import { NotebookFooter } from "./NotebookFooter"
import { NotebookHeader } from "./NotebookHeader"

interface BlogLayoutProps{
    children: React.ReactNode
}

export const NotebookLayout = ({children}:BlogLayoutProps)=>{
    return (
        <div>
            <NotebookHeader/>
                {children}
            <NotebookFooter/>
        </div>
    )
}