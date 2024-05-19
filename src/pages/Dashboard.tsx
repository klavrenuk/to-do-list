import React from 'react';

import TasksList from "@/components/tasks/TasksList";

const Dashboard = () => {
    return (
        <div className={'dashboard'}>
            <TasksList />
        </div>
    )
}

export default Dashboard;
