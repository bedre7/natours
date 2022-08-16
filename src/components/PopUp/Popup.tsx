import React, { FC } from 'react'
import Booking from '../Booking/Booking'
import classes from './Popup.module.scss'

const Popup:FC<{onClose(): void}> = (props) => {
  return (
    <div className={classes.popup}>
        <div className={classes.content}>
            <Booking onClose={props.onClose}/>
        </div>
    </div>
  )
}

export default Popup