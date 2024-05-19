import React from 'react';

import { AiOutlineOrderedList } from "react-icons/ai";

import './styles/group.css'

const Group = () => {
    return (
        <div className={'group-block flex items-center justify-between gap-2'}>
            <div className={'flex gap-2 items-center'}>
                <AiOutlineOrderedList />
                <span className={'group-block__name'}>
                    Name
                </span>
            </div>

            <div className={'group-block__count'}>
                30
            </div>
        </div>
    )
}

export default Group;
