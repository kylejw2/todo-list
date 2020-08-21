import React from 'react';

const ListHeader = (props) => {

    return (
        <li className="list-group-item">
            {props.name}
        </li>
    )
}

export default ListHeader;