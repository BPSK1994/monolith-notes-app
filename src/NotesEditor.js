import React, {useContext} from 'react';
import { AppContext } from './context';

const NotesEditor = function() {
    
    
    
    const {folderFocus, setAllNotes, toggleEditor, setToggleEditor, formData, setFormData} = useContext(AppContext);


    // Add note object to the noteList array of objects
    const handleSubmit = function(event) {
        event.preventDefault();
        setFormData({title: "", content: ""});
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const todaysDate = new Date();
        const timeCreated = `${todaysDate.getHours()}:${todaysDate.getMinutes()} hrs`
        const dateCreated = `${monthNames[todaysDate.getMonth()]} ${todaysDate.getDate()}, ${todaysDate.getFullYear()} at ${timeCreated}`;
        
        const id = Math.floor(Math.random() * 10000);

        const newItem  = {id: id, parentFolder: folderFocus, title: formData.title, content: formData.content, dateCreated: dateCreated };
        setAllNotes(function(prevState) {
            return [...prevState, newItem];
        });
    }

    const handleChange = function(event) {
        const {name, value} = event.target;
        setFormData(function(prevState) {
            return ({...prevState, [name]: value});
        });
    }


    return (
        <React.Fragment>
            <section className = "notes-editor">
                
                <div className = "editor">
                    <div className = "editor-tools">
                        <div className = "new-note-btn" onClick = {function() {setToggleEditor(!toggleEditor)}}>
                            <i className = "fa-solid fa-note-sticky"></i>
                        </div>
                    </div>
                </div>
                    

                {toggleEditor && <div className = "note">
                    <form className = "form" onSubmit  = {function(event) {handleSubmit(event)}}>
                        <div className = "form-control">
                            <input 
                                className = "note-title"
                                type = "text"
                                name = "title"
                                value = {formData.title}
                                placeholder = "Title..."
                                onChange = {handleChange} 
                                 />

                            <textarea 
                                className = "note-content"
                                name = "content"
                                value = {formData.content}
                                onChange = {handleChange}
                            />  

                            <button className = "submit-note-btn"
                                    type = "submit">Add
                            </button>
                        </div>
                    </form>
                </div>}
            </section>
        </React.Fragment>
    );
    
}

export default NotesEditor;