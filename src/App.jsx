import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState();

  const [incompleteTodos, setIncompleteTodos] = useState([
    "テキスト1",
    "テキスト2",
    "テキスト3"
  ]);

  const onChangeTodoText = (e) => {
    console.log(e.target.value);
    setTodoText();
  };

  const [completeTodos, setCompleteTodos] = useState([
    "完了テキスト１",
    "完了テキスト２"
  ]);
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入れる"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了エリア</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
