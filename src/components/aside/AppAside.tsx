import React from 'react';

import AsideGroups from "../aside-groups/AsideGroups";

const AppAside = () => {
    return (
        <aside className={'app-side'}>
            <button className={'toggle__menu'}>
                ToggleMenu
            </button>

            <AsideGroups />
        </aside>
    )
}

export default AppAside
