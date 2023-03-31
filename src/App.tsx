import React, {useState} from "react";
import './App.css';

function App() {
  const[value, setValue]=useState("");
  const[todos,setTodos]=useState<Todo[]>([]);

  // 型
  type Todo = {
    value: string;
    id: number;
    checked: boolean;
  };

  // 文字列の取得
  const handleChange =(e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setValue(e.target.value);
  };

  // 配列の追加
  const handleSubmit =(e: { preventDefault: () => void; }) =>{
    e.preventDefault();

    const newTodo: Todo = {
      value: value,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
  };

  // 配列の編集
  const handleEdit =(id: number, value: string)=>{
    const newTodos = todos.map((todo)=>{
      if (todo.id===id){
        todo.value=value;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // 配列の削除
  const handleDelete=(id: number)=>{
    const newTodos = todos.filter((todo)=>todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h2>todolist</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <input type="submit" value="作成"/>
      </form>

      <ul>
        {todos.map((todo)=>(
        <li>
          <input type="text" value={todo.value} onChange={(e) => handleEdit(todo.id, e.target.value)}/>
          <input type="checkbox"/>
          <button onClick={() =>handleDelete(todo.id)}>削除</button>
        </li>
      
      ))}
      </ul>
    </div>
  );
}

export default App;
