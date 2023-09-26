import React, { useState, useEffect } from "react";

// creating context
const TodoContext = React.createContext();

// provider
export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);

  const [todoCount, setTodoCount] = useState(0);
  
  // updating count value
  const handleTodoCount = () => {
    let newCount = todoItems.filter((item) => item.isActive === true);
    setTodoCount(newCount.length);
  };

  const addTodoItem = (newTodoItem) => {
    setTodoItems([
      ...todoItems,
      {
        id: `${todoItems.length + 1}`,
        title: `${newTodoItem}`,
        isActive: true,
        show: true,
      },
    ]);
  };

  const removeTodoItem = (todoItemToRemove) => {
    // finding the item to remove using id
    const existingItem = todoItems.find(
      (item) => item.id === todoItemToRemove.id
    );

    // removing the item and updating newTodoItems

    if (existingItem) {
      const newTodoItems = todoItems.filter(
        (item) => item.id !== todoItemToRemove.id
      );
      setTodoItems(newTodoItems);
    }
  };


  // clearing comleted items based on 'isActive'
  const clearCompleted = () => {
    let newTodoItems = todoItems.filter((item) => item.isActive === true);
    setTodoItems(newTodoItems);
  };

  useEffect(() => {
    // updating count
    handleTodoCount();
  }, [todoItems]);
  // passing functions and states
  return (
    <TodoContext.Provider
      value={{
        todoItems: todoItems,
        addTodoItem: addTodoItem,
        removeTodoItem: removeTodoItem,
        handleTodoCount: handleTodoCount,
        todoCount: todoCount,
        clearCompleted: clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
