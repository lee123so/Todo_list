import React, { useState } from "react";
import Form from "../component/form/Form";
import Header from "../component/header/Header";
import Layout from "../component/layout/Layout";
import List from "../component/list/List";

const TodoList = () => {
    const [cont, setCont] = useState("")
    // const [isDone, setIsDone] = useState(false)
    const [title, setTitle] = useState("");
    const [isDone,setIsDone] = useState(false)
    const [todos, setTodos] = useState([
      {
        id: 1,
        title: "react를 배워봅시다.",
        cont:"리엑트는 재밌어요",
        isDone: false
      },{
        id: 2,
        title: "react를 배워봅시다.",
        cont:"리엑트는 재밌어요",
        isDone: true
      }
    ]);
    
   




return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} title = {title} cont = {cont} setTitle = {setTitle}  setCont = {setCont} />
      <List todos={todos} setTodos={setTodos} title = {title} cont = {cont} isDone = {isDone} setIsDone = {setIsDone} setCont = {setCont} />
    </Layout>
  );
};
export default TodoList;