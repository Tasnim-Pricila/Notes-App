import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    {
      title: 'This is my First title',
      description: 'This is my First Description.This is my First Description.This is my First Description.This is my First Description.'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    console.log(title, description)
    setNotes([...notes, { title: title, description: description }])
  }
  const handleDelete = (title) => {
    const filter = notes.filter(note => note.title !== title)
    setNotes(filter);
  }
  

  return (
    <div>
      <h1>Note App</h1>
      <div className='notes'>
          <form className='addNote' onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Title' />
            <textarea type="text" rows={6} name='description' placeholder='Description' />
            <input type='submit' value='Save' className='button'/>
          </form>
        {
          notes.map((note, index) =>
            <div key={index} className='child'>
              <p style={{ fontWeight: 'bold' }}>{note.title}</p>
              <p className='description'>{note.description}</p>
              <button className='button' onClick={() => handleDelete(note.title)}>Delete</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
