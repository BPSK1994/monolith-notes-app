import React, {useContext} from "react";
import { AppContext } from "../context";

const SidebarFooter = function() {
    const {toggleInput} = useContext(AppContext);
    return (
        <React.Fragment>
         {/* DELETE & ADD FOLDER */}
            <div className = "sidebar-footer">
                <div className = "icon-wrapper"><i className = "fa-solid fa-trash dlt-btn"></i></div>
                <div className = "icon-wrapper" onClick = {function() {toggleInput()}}><i className = "fa-solid fa-plus add-btn"></i></div>
            </div>
        </React.Fragment>
    );
};

export default SidebarFooter;