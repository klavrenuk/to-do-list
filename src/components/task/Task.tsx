import React from 'react';

import './styles/task.scss';

const Task = () => {
    return (
        <div className={'task'}>
            <div className={'task__grid grid gap-3'}>
                <div>
                    Checkbox
                </div>
                <div>
                    <p className={'task__name'}>
                        Name
                    </p>
                    <p className={'task__description'}>
                        Description
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Task;
