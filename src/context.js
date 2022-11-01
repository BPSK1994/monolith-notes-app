import React, {useContext, createContext} from 'react';

let folderArrayLocalStorange = JSON.parse(localStorage.getItem("foldersArray")) || [];

const AppContext = createContext();

const AppProvider = function({children}) {

    const [addFolder, setAddFolder] = React.useState(false);
    const [input, setInput] = React.useState("");
    const [list, setList] = React.useState(folderArrayLocalStorange);
    const [allNotes, setAllNotes] = React.useState([]);
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



    const handleSubmit = function(event) {
      event.preventDefault();
      const id = Math.floor(Math.random() * 10000);
      const newItem = {id:id, title: input}
      setList(function(prevState) {
        return ([...prevState, newItem])
      });
      setAddFolder(false);
      setInput("");
    };

    const toggleInput = function() {
        setAddFolder(function(prevState) {
            return !prevState;
        });
    };

    const handleChange = function(event) {
        setInput(event.target.value);
    };



    return (
        <AppContext.Provider value = {{
            addFolder,
            input,
            list,
            handleChange,
            handleSubmit,
            toggleInput,
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
            editID,
            setEditID,
            isEditing,
            setIsEditing
        }}>
            {children}
        </AppContext.Provider>
    );

};

export {AppContext, AppProvider}