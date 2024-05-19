import React from 'react';

import Task from "@/components/task/Task";

import './styles/tasks-list.scss';

const TasksList = () => {
    return (
        <ul className={'tasks-list flex gap-4'}>
            <li className={'tasks-list__item'}>
                <Task />
            </li>
        </ul>
    )
}

export default TasksList;
