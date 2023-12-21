import './noteItem.css'

interface NoteType {
    username: string,
    content: string,
    likeCount: number,
    commCount: number
}

export const Note = ({ note }: { note: NoteType }) => {
    const { username, content, likeCount, commCount } = note
    return <div className='note-wrapper'>
        <span className='note-username'>{username}</span>
        <span className='note-content'>{content}</span>
        <div className="interactive">
            <span className='likes'><i className="far fa-heart"></i> <span className="like-counter">{likeCount}</span></span>
            <span className='comments'><i className="far fa-comment"></i> <span className="comm-counter">{commCount}</span></span>
        </div>
    </div>
}    