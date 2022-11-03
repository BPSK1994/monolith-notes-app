import React, {useContext, createContext} from 'react';

let folderArrayLocalStorange = JSON.parse(localStorage.getItem("foldersArray")) || [];
let NotesArrayLocalStorange = JSON.parse(localStorage.getItem("NotesArray")) || [];


const AppContext = createContext();

const AppProvider = function({children}) {



    const [list, setList] = React.useState(folderArrayLocalStorange);
    const [allNotes, setAllNotes] = React.useState(NotesArrayLocalStorange);

    const [folderFocus, setFolderFocus] = React.useState("");

    const [toggleEditor, setToggleEditor] = React.useState(true);
    

    const [editID, setEditID] = React.useState(null);
    const [isEditing, setIsEditing] = React.useState(false);

    const [formData, setFormData] = React.useState(
        {
            title: "",
            content: ""
        }
    );

    React.useEffect(function() {
        localStorage.setItem("foldersArray", JSON.stringify(list))
    }, [list]);

    React.useEffect(function() {
        localStorage.setItem("NotesArray", JSON.stringify(allNotes))
    }, [allNotes]);



    return (
        <AppContext.Provider value = {{
            list,
            setList,
            folderFocus,
            setFolderFocus,
            allNotes,
            setAllNotes,
            toggleEditor,
            setToggleEditor, 
            formData,
            setFormData,
            editID,
            setEditID,
            isEditing,
            setIsEditing,
        }}>
            {children}
        </AppContext.Provider>
    );

};

export {AppContext, AppProvider}