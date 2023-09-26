import React, { useState, useContext, useEffect } from "react";
import "./List.css";

import TodoItem from "./TodoItem";

// Context
import TodoContext from "../context/TodoContext";

const List = () => {
  const { todoItems, todoCount, clearCompleted } = useContext(TodoContext);
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(true);

  const showActiveTasks = () => {
    setShowAll(false);
    let newItems = todoItems.filter((item) => item.isActive === true);
    setTodoList(newItems);
  };

  const showCompletedTasks = () => {
    setShowAll(false);
    let newItems = todoItems.filter((item) => item.isActive === false);
    setTodoList(newItems);
  };

  useEffect(() => {
    // Select the filter
    let filterOption = document.querySelector(`#${filter}`);
    // add color to the selected filter
    filterOption.classList.add("selected");
    if (showAll) {
      setTodoList(todoItems);
    }

    // the ticks show appear wehenever the list rerenders
    todoList.forEach((item) => {
      if (item.isActive === false) {
        let todoCircle = document.querySelector(`#todo-icon-${item.id}`);
        let check = document.querySelector(`#check-${item.id}`);
        let todoItemTitle = document.querySelector(`#todo-item-${item.id}`);

        todoCircle.classList.add("checked");
        check.classList.remove("hidden");
        todoItemTitle.classList.add("checked");
      }
    });

    return () => {
      filterOption.classList.remove("selected");
    };
  }, [todoList, todoItems, showAll, filter]);

  return (
    <div className="list_container">
    {/* mapping each todolist items to  TodoItem component*/}
      {
        todoList.length > 0
        ? todoList.map((item) => {
            return <TodoItem key={item.id} todoItem={item} />;
          })
        : null
        }

      <div className="list_footer">
        <div className="footer1"> {`${todoCount}`} items left</div>
        <div className="footer2">
          <div
            id="all"
            onClick={() => {
              setShowAll("true");
              setFilter("all");
            }}
          >
            All
          </div>
          <div
            id="active"
            onClick={() => {
              setFilter("active");
              showActiveTasks();
            }}
          >
            Active
          </div>
          <div
            id="completed"
            onClick={() => {
              setFilter("completed");
              showCompletedTasks();
            }}
          >
            Completed
          </div>
        </div>
        <div className="footer3" onClick={clearCompleted}>
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default List;
