import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Note, Modal } from './Components';

const mockNote = { username: 'fakeUser1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam voluptas fugit nemo optio temporibus, totam minima aliquid dolorem alias inventore fugiat dignissimos illum molestiae sit, impedit dicta modi adipisci recusandae!', likeCount: 7, commCount: 3 }
function App() {
  return (
    <div className="App">
      <Modal open={true} component={<Note note={mockNote} />} />
      {/* <Note  /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
