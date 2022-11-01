import React, {useContext} from 'react';
import { AppContext } from './context';

const NotesList = function() {
    const {folderFocus, allNotes, formData, setFormData} = useContext(AppContext);

    const editNote = function(id) {
        console.log(id);
    };


    return (
        <section className = "notes-list" >
            <div className = "notes-search">

            </div>
            <div className = "folder-notes">
                {allNotes.map(function(item) {
                    const {id, parentFolder, title, content, dateCreated} = item;
                    if(parentFolder === folderFocus) {
                        return (
                            <div className = "folder-item-container">
                                <div className = "folder-item" onClick = {function() {editNote(id)}}>
                                    <h3 className = "folder-item-title">{title}</h3>
                                    <p>{content}</p>
                                    <h5>{dateCreated}</h5>
                                </div>
                            </div>
                        );
                    }    
                })}
            </div>

        </section>
    )
    
}


export default NotesList;