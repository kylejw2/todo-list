import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import Calendar from 'react-calendar';

const Task = (props) => {
      
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(props.task.name);
    const [finishDate, setFinishDate] = useState(new Date());
    const [noFinishDate, setNoFinishDate] = useState(false);
    
    const toggle = () => {
        if (modal === true) {
            setName(props.task.name);
            setFinishDate(new Date());
        }
        setModal(!modal)
    };

    const handleChange = (date) => {
        setFinishDate(date);
    }

    const removeTask = (completed) => {
        if (completed) {
            document.title = 'Congrats!';
        } else {
            document.title = 'List';
        }
        props.removeTask(props.index);
        toggle();
    }

    const handleUpdate = () => {
        const obj = {name};
        if (!noFinishDate) {
            obj.finishDate = finishDate;
        }
        props.updateTask(obj, props.index);
    }

    return (
        <li className='row' style={{marginTop: "10px", borderBottom: "1px dashed #343b40"}}>
            <div className='col-4'>
                <div>
                {props.task.name}
                </div>
            </div>
            <div className='col-4'>
                {props.task.finishDate === undefined ? <i>No finish date</i> : props.task.finishDate.toString().substr(0, 15)}
            </div>
            <div className='col-4 text-center'>
                <i className='fa fa-gear' onClick={toggle} style={{fontSize: '20px'}}></i>
                <div>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Current Task</ModalHeader>
                        <ModalBody>
                            <form>
                                <input type='text' placeholder='New list name' style={{width: '100%', marginBottom: '10px'}} value={name} onChange={({target}) => setName(target.value)}/>
                                {noFinishDate ? '' : <Calendar value={finishDate} onChange={handleChange}/>}
                                        <input type='checkbox' checked={noFinishDate} style={{marginTop: "10px"}} onChange={() => setNoFinishDate(!noFinishDate)}/> {' No finish date'}
                            </form>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="success" onClick={() => removeTask(true)}>Completed</Button>{' '}
                        <Button color="secondary" onClick={handleUpdate}>Update</Button>
                        <Button color="danger" onClick={() => removeTask(false)} >Delete</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </li>
    )
}

export default Task;