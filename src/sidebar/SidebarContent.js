import React, {useContext} from 'react';
import { AppContext } from '../context';

const Folders = function() {
    const {addFolder, handleChange, handleSubmit, input, list} = useContext(AppContext);
    return (
        <React.Fragment>
            <div className = "sidebar-content">
                {addFolder && 
                <div className = "new-folder">
                    <div className = "icon-wrapper"><i className = "fa-regular fa-folder"></i></div>
                    <form className = "form" onSubmit = {function(event) {handleSubmit(event)}}>
                        <div className = "form-control">
                            <input className = "form-input"
                                    type = "text"
                                    value = {input}
                                    placeholder = "eg. Business ideas"
                                    onChange = {function(event) {handleChange(event)}} 
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
        </React.Fragment>
    );
};


export default Folders;