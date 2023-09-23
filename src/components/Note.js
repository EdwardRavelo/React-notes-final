/* 
const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button className='delete' 
                onClick ={() => handleDeleteNote(id)} >Borrar</button>
            </div>
        </div>
    );
};

export default Note; */

import React, { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleEditNote = () => {
        setIsEditing(true);
    };

    const handleSaveNote = () => {
        // Aquí puedes agregar la lógica para guardar la nota editada.
        // Por ejemplo, puedes enviar una solicitud a tu servidor o
        // actualizar el estado de la nota en tu componente principal.
        // Luego, puedes establecer setIsEditing(false) para salir del modo de edición.
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        // Si el usuario decide cancelar la edición, simplemente restauramos
        // el texto original y salimos del modo de edición.
        setEditedText(text);
        setIsEditing(false);
    };

    return (
        <div className="note">
            {isEditing ? (
                <div>
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button className='delete' onClick={handleSaveNote}>Guardar</button>
                    <button className= 'delete' onClick={handleCancelEdit}>Cancelar</button>
                </div>
            ) : (
                <div>
                    <span>{editedText}</span>
                    <div className="note-footer">
                        <small>{date}</small>
                        <span>
                            <button className='delete' onClick={handleEditNote}>Editar</button>
                            <button className='delete' onClick={() => handleDeleteNote(id)}>Borrar</button>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Note;