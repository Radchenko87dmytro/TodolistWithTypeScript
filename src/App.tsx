import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist, PropsType, TaskType } from "./Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
  ]);

  console.log(tasks);

  const [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    //debugger;
    let filteredTasks = tasks.filter((t) => t.id !== id); //t.id !=== id
    setTasks(filteredTasks);
    console.log(filteredTasks);
  }

  function addTask() {
    let newTask = { id: v1(), title: "New Task", isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
      {/* <Todolist title="Movies" tasks={tasks2} /> */}
    </div>
  );
}

export default App;
