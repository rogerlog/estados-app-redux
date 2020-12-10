import React from 'react';

const List = ({todoList}) => (
    <ul>
        {todoList.map(item => (
            <li key={item.id}>{item.name}</li>
        ))} 
    </ul>
)

export default List;