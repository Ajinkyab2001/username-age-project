import React from 'react'
import Button from './Button'
import './ErrorModule.css'
import ReactDOm from 'react-dom'

const Backdrop = (props) =>{
    return <div className='backdrop' onClick={props.onConfirm} />
} 

const ModalOverlay = (props) =>{
  return   <div className='modal'>
            <header className ='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
             <p>{props.msg}</p>
            </div>
            <footer className='actions'>
             <Button onClick={props.onConfirm}>okay</Button>
            </footer>
        </div>
}

const ErrorModule = (props) => {
  return (
       <React.Fragment>
         {ReactDOm.createPortal(<Backdrop onConfirm={props.onConfirm} />,document.getElementById('backdrop-root'))}
         {ReactDOm.createPortal(<ModalOverlay title={props.title} msg = {props.msg} onConfirm={props.onConfirm} />,document.getElementById('overlay-root'))}
       
         </React.Fragment>
        
  )
}

export default ErrorModule