import React, { useState } from 'react';
import DashBoard from './DashBoard';

const Todo = () => {
    // State to manage todo items
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    // Function to handle input change
    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    };

    // Function to add a new todo item
    const handleAddTodo = () => {
        if (todoInput.trim() !== '') {
            setTodos([...todos, { text: todoInput, done: false }]);
            setTodoInput('');
        }
    };

    // Function to mark a todo item as done or not done
    const handleToggleDone = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
    };

    // Function to remove a todo item
    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <DashBoard/>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                                placeholder="Add Todo" 
                                value={todoInput} 
                                onChange={handleInputChange} 
                            />
                            <button 
                                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                                onClick={handleAddTodo}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div>
                        {todos.map((todo, index) => (
                            <div className="flex mb-4 items-center" key={index}>
                                <p className={`w-full ${todo.done ? 'line-through text-green' : 'text-grey-darkest'}`}>
                                    {todo.text}
                                </p>
                                <button 
                                    className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded ${todo.done ? 'text-grey border-grey' : 'text-green border-green'} hover:text-white hover:bg-${todo.done ? 'grey' : 'green'}`}
                                    onClick={() => handleToggleDone(index)}
                                >
                                    {todo.done ? 'Not Done' : 'Done'}
                                </button>
                                <button 
                                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                                    onClick={() => handleRemoveTodo(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
