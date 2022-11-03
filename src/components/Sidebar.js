import React, {useContext} from 'react';
import { AppContext } from '../context';

const Sidebar = function() {

    

    const [newFolderInput, setNewFolderInput] = React.useState("");
    const [folderEditInput, setFolderEditInput] = React.useState("");

    const [createFolder, setCreateFolder] = React.useState(false);
    const [editFolder, setEditFolder] = React.useState(false);
    const [editFolderTitle, setEditFolderTitle] = React.useState(false);
    const [folderID, setFolderID] = React.useState(null);


    const {list,
           setList,
           folderFocus,
           setFolderFocus,
           allNotes,
           setAllNotes
        } = useContext(AppContext);


        // Functions
        const handleChange = function(event) {
            setNewFolderInput(event.target.value);
        };

        const handleSubmit = function(event) {
            event.preventDefault();
            const id = Math.floor(Math.random() * 10000);
            const newItem = {id:id, title: newFolderInput};
            setList(function(prevState) {
              return ([...prevState, newItem]);
            });
            setCreateFolder(false);
            setNewFolderInput("");
          };
    

        // Toggle input element that creates new folder //  
          const toggleInput = function() {
            setCreateFolder(!createFolder);
        };

        // Toggle "delete folder" and "edit folder name" functionality 
        const toggleEdit = function() {
            setEditFolder(function(prevState) {
                return !prevState;
            });
            setEditFolderTitle(false);
        }
    

        // delete folder
        const deleteFolder = function(id, title) {
            if(editFolder) {
                setList(list.filter(function(item) {
                    return item.id !== id;
                }));

                setAllNotes(allNotes.filter(function(item) {
                    return item.parentFolder !== title;
                }));
            }
        };

        
        const editFolderName = function(id) {
            if(editFolder) {
                const editFolderName = list.find(function(item) {
                    return item.id === id;
                });
                setEditFolderTitle(true);
                setFolderID(id);
                setFolderEditInput(editFolderName.title);
            }
        }

        const toggleFocusStyles = function(id) {
            if(id === folderFocus) {
                return "folder folder-active";
            } else {
                return "folder folder-inactive";
            }
        }

        const folderListSort = [...list].sort(function(a,b) {
            return (a.title > b.title ? 1 : -1);
        })


        const handleEditChange = function(event) {
            setFolderEditInput(event.target.value);
        }


        const handleEditSubmit = function(event) {
            event.preventDefault();
            if(editFolderTitle) {
                setList(list.map(function(item) {
                    if (item.id === folderID) {
                        return {...item, title: folderEditInput}
                    }
                    return item;
                }));
                setFolderID(null);
                setEditFolderTitle(false);
            }
        }

    return (
        <React.Fragment>
            <aside className = "sidebar">

                {/* Sidebar Header */}
                <div className = "sidebar-header">
                    <h4 className = "sidebar-header__title">Monolith</h4>
                </div>


                {/*Sidebar Content*/}
                <div className = "sidebar-content">
                    {createFolder && 
                    <div className = "new-folder">
                        <div className = "icon-wrapper"><i className = "fa-regular fa-folder"></i></div>
                        <form className = "form" onSubmit = {function(event) {handleSubmit(event)}}>
                            <div className = "form-control">
                                <input className = "form-input"
                                        type = "text"
                                        value = {newFolderInput}
                                        placeholder = "eg. Business ideas"
                                        onChange = {function(event) {handleChange(event)}} 
                                />
                            </div>
                        </form>
                    </div>}

                    {folderListSort.map(function(item) {
                        const {id, title} = item;
                        return (
                            <div className = {toggleFocusStyles(id)} onClick = {function() {setFolderFocus(id)}} key = {id} >
                                <div className = "icon-wrapper" onClick = {function() {deleteFolder(id,title)}}><i className = {editFolder ? "fa-solid fa-circle-minus dlt-btn" : "fa-regular fa-folder folder-icon"}></i></div>

                                {(folderID === id && editFolderTitle) ? <form  className = "folder-input" onSubmit = {function(event) {handleEditSubmit(event)}}>
                                                    <input 
                                                        type = "text"
                                                        value = {folderEditInput}
                                                        onChange = {function(event) {handleEditChange(event)}}/>
                                                        </form> :
                                <h4 className = "folder-heading">{title}</h4>
                        }
                                <div className = "icon-wrapper" onClick = {function() {editFolderName(id); setEditFolderTitle(!editFolderTitle)}}><i className = {editFolder ? "fa-regular fa-pen-to-square edit-folder-name" : "" }></i></div>
                                
                            </div>
                        );
                    })}
                </div>


                {/* Sidebar Footer */}
                <div className = "sidebar-footer">
                    <div className = "icon-wrapper" onClick = {function(){toggleEdit()}}><i className = "fa-solid fa-gear edit-btn"></i></div>
                    <div className = "icon-wrapper" onClick = {function() {toggleInput()}}><i className = {createFolder ? "fa-solid fa-minus add-btn" : "fa-solid fa-plus add-btn"}></i></div>
                </div>
            </aside>
        </React.Fragment>
    );
};


export default Sidebar;