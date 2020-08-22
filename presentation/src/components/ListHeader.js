import React from 'react';

const ListHeader = (props) => {

    return (
        <>
        <li className="list-group-item sideItem" onClick={() => {props.displayList(props.index)}}>
            {props.name}
        </li>
        
        </>
    )
}

export default ListHeader;