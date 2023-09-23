import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
 
const App = () => {
  const [notes,  setNotes] = useState([
    {
      id: nanoid(),
      text: "esta es mi primera nota",
      date: '08/35/2023', 
    },
    {
      id: nanoid(),
      text: 'Esta es mi segunda nota!',
      date: '08/31/2023',
    },
    {
        id: nanoid(),
      text: 'Esta es mi tercera nota!',
      date: '08/31/2023',
    },
    {
      id: nanoid(),
      text: 'Esta es mi cuarta nota!',
      date: '08/31/2023',
    },    
]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState (false);


  useEffect(() => {
    try {
      const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-apps-data')
      );
  
      if (savedNotes && Array.isArray(savedNotes)) {
        setNotes(savedNotes);
      }
    } catch (error) {
      console.error('Error al cargar notas desde localStorage:', error);
    }
  }, []);
  
  useEffect(() => {
    try {
      localStorage.setItem(
        'react-notes-apps-data',
        JSON.stringify(notes)
      );
    } catch (error) {
      console.error('Error al guardar notas en localStorage:', error);
    }
  }, [notes]);
  

  function AddNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString('en-US')
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}> 
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/> 
        <NotesList 
            notes={notes.filter((note)=> note.text.toLowerCase().includes (searchText)
          )} 
                    
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
     
export default App;