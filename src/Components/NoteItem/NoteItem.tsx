import React from 'react'
import './noteItem.css'

export interface NoteType {
    id: number,
    author: string,
    content: string,
    likes: number,
    commCount: number
}

export const Note = ({ note }: { note: NoteType }) => {
    const { id, author, content, likes, commCount } = note
    const [liked, setLiked] = React.useState<boolean>(false)
    return <div className='note-wrapper' key={`id__${id}__$${author}`}>
        <span className='note-username'>{author}</span>
        <span className='note-content'>{content}</span>
        <div className="interactive">
            <span className='likes' onClick={() => setLiked(prev => !prev)}><i className={`${liked ? 'fas' : 'far'} fa-heart`}></i> <span className="like-counter">{likes}</span></span>
            <span className='comments'><i className="far fa-comment"></i> <span className="comm-counter">{commCount}</span></span>
        </div>
    </div>
}    