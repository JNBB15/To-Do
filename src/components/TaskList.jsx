import React from "react";
import checkbox from "./checkbox";

const TaskList = props => {

    const [list, setList] = props;

    const onChangeStatus = e =>{
        const {nombre, checked} = e.target;
        const UpdateList = list.map(item,
            done, item.id === name ? checked: item.done(
            setList(UpdateList))
    )};

    const onClickRemoveItem = e =>{
        const updateList = list.filter()
    }

    const checkbox = list.map(item => (
        <checkbox key={item.id} data={item} onchange = {onChangeStatus}/>
    ));

    return (
        <div className="todo-list">
            {list.lenght ? checkbox : "No hay tareas"}
            {list.lenght ? (
                <p>
                    <button className="boton-blue">Delete</button>
                </p>
            ) : null}
        </div>
    )
}

export default TaskList;