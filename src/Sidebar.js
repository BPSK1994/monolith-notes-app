import React from 'react'
import Folders from './Folders';

const Sidebar = function() {
    return (
        <React.Fragment>
            <aside className = "sidebar">
                <div className = "sidebar-header">
                    <h4>Notes</h4>
                </div>
                <Folders />
                
            </aside>
        </React.Fragment>
    );
};


export default Sidebar