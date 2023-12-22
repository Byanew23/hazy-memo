import React from 'react'
import { Note, Modal, NoteForm } from '../../Components'
import './landingPage.css'
import { getItems } from '../../database_utils/utils'
import { NoteType } from '../../Components'

export const LandingPage = () => {
    const [items, setItems] = React.useState<NoteType[]>([])
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    if (!items.length) {

        getItems().then(data => data && setItems(data.sort((a, b) => b.id - a.id)))
    }
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
        getItems().then(data => data && setItems(data.sort((a, b) => b.id - a.id)))
    }

    return <div className='landing-wrapper'>
        <h1 className='title'>HAZY MEMOS</h1>
        <div className='add-new' onClick={() => handleOpenModal()}>Add New Note</div>
        {items && items.map(item => <Note note={item} />)}
        {isOpen && <Modal open={isOpen} component={<NoteForm closeModal={handleCloseModal} />} onClose={() => handleCloseModal()} />}
    </div>
}