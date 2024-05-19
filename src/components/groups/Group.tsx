import React from 'react';

const Group = () => {
    return (
        <div className={'group-block flex gap-2 items-center justify-between'}>
            <span>icon</span>
            <span className={'group-block__name'}>
                Name
            </span>
            <span className={'group-block__count'}>
                30
            </span>
        </div>
    )
}

export default Group;
