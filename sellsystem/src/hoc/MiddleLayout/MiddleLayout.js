import React from 'react'
import { useMiddleLayoutStyles } from './middleLayoutStyles'

const MiddleLayout = ({children})=>{
    const classes = useMiddleLayoutStyles()
    return <div className={classes.root}>
        {children}
    </div>
}

export default MiddleLayout