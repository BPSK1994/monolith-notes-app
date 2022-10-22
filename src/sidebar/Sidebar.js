import React from 'react'
import SidebarHeader from './SidebarHeader';
import SidebarContent from './SidebarContent';
import SidebarFooter from './SidebarFooter';

const Sidebar = function() {
    return (
        <React.Fragment>
            <aside className = "sidebar">
                <SidebarHeader />
                <SidebarContent />
                <SidebarFooter />
            </aside>
        </React.Fragment>
    );
};


export default Sidebar;