import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 1000;

    const handleChange = (Event) => {
        if(characterLimit - Event.target.value.length >=0) {
        setNoteText (Event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
        handleAddNote(noteText);
        setNoteText("")
        }
    };

    <span class="input" role="textbox" contenteditable>99</span>
    
    return(<div className="note new">
            <textarea 
                rows='8'
                cols='10'
                placeholder="Escribe acá para añadir nota nueva..."
                value={noteText}
                onChange={handleChange}            
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} caracteres restantes</small>
                <button className="save" onClick={handleSaveClick}>Guardar</button>
            </div>
    </div>
    );
};

export default AddNote;