import React from 'react'

const Folders = function() {
    
    const [addFolder, setAddFolder] = React.useState(false);
    const [input, setInput] = React.useState("");
    const [list, setList] = React.useState([]);


    const handleSubmit = function(event) {
      event.preventDefault();
      const id = Math.floor(Math.random * 10000);
      const newItem = {id:id, title: input}
      setList(function(prevState) {
        return ([...prevState, newItem])
      });
      setAddFolder(false);
      setInput("");
    };
  


    return (
        <React.Fragment>
            <div className = "sidebar-content">

                {/* ADD NEW FOLDER */}
                {addFolder && 
                <div className = "new-folder">
                    <div className = "icon-wrapper"><i className = "fa-regular fa-folder"></i></div>
                    <form className = "form" onSubmit = {function(event) {handleSubmit(event)}}>
                        <div className = "form-control">
                            <input className = "form-input"
                                    type = "text"
                                    value = {input}
                                    placeholder = "eg. Business ideas"
                                    onChange = {function(event) {setInput(event.target.value)}}
                            />
                        </div>
                    </form>
                </div>}


                {list.map(function(item) {
                    const {id, title} = item;
                    return (
                        <div className = "folder" key = {id} >
                            <div className = "icon-wrapper"><i className = "fa-regular fa-folder"></i></div>
                            <h4 className = "folder-heading">{title}</h4>
                        </div>
                    );
                })}
                

                
            </div>
           

            {/* DELETE & ADD FOLDER */}
            <div className = "sidebar-footer">
                <div className = "icon-wrapper"><i className = "fa-solid fa-trash dlt-btn"></i></div>
                <div className = "icon-wrapper" onClick = {function() {setAddFolder(true)}}><i className = "fa-solid fa-plus add-btn"></i></div>
            </div>


        </React.Fragment>
    );
};


export default Folders