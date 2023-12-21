import React from 'react'
import './modal.css'

export const Modal = ({ component, open }: { component: JSX.Element, open: boolean }) => {
    const ref = React.useRef(null)
    const [isOpen, setIsOpen] = React.useState<boolean>(open)

    const handleClose = (e: React.MouseEvent) => {
        if (ref.current && e.target == ref.current) {
            console.log(ref.current)
            setIsOpen(false)
        }
    }

    return isOpen ? <div ref={ref} onClick={(e) => handleClose(e)} className="modal-wrapper">{component}</div> : null
}