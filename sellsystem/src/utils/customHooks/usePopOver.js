import { useState } from "react"


export const usePopOver =()=>{
    const [open,setOpen]= useState(false)

    const handleToogleOpen = ()=>{
        setOpen((prevState)=>!prevState)
    }

    return [open,handleToogleOpen]
}