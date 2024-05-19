import React from 'react';

import AsideGroups from "../aside-groups/AsideGroups";

import { AiOutlineAlignLeft } from "react-icons/ai";

import './styles/app-side.css';

const AppAside = () => {
    return (
        <aside className={'app-side'}>
            <div className={'app-side__toggle mb-4'}>
                <button className={'app-side__toggle__btn'}>
                    <AiOutlineAlignLeft />
                </button>
            </div>

            <AsideGroups />
        </aside>
    )
}

export default AppAside
