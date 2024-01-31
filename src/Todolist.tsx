function sum(a: number, b: number) {
  alert(a + b);
}

//sum(12, 14);

export interface TaskType {
  id: number;
  title: string;
  isDone: boolean;
}

interface PropsType {
  title: string;
  tasks: Array<TaskType>;
}

export function Todolist(props: PropsType) {
  // props = {title: "What to learn", tasks: []}
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type={"checkbox"} checked={props.tasks[0].isDone} />
          <span>{props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span>JS</span>
        </li>
        <li>
          <input type="checkbox" checked={false} />
          <span>React</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
