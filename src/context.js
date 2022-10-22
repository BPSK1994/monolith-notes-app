import React, {useContext, createContext} from 'react';

const AppContext = createContext();

const AppProvider = function({children}) {

    console.log(children);
    const [addFolder, setAddFolder] = React.useState(false);
    const [input, setInput] = React.useState("");
    const [list, setList] = React.useState([]);


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
            toggleInput
        }}>
            {children}
        </AppContext.Provider>
    );

};

export {AppContext, AppProvider}