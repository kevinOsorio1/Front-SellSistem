import { useCallback, useState } from "react"

export const useFormValue = ()=>{
    const [value,setValue] = useState("")

    const handleChangeValue= useCallback((newValue)=>{
        setValue(newValue)
    },[])

    return [value,handleChangeValue]
}