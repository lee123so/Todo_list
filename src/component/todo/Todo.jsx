import "./style.css"
const Todo = ({onRemove,todo,TodoDone,id}) =>{
  return(
    <div className="todo" key={todo.id}>
              
    <div className="todo-title">
    {todo.title}
    </div>
    
    <div className="todo-content">
    {todo.cont}
  </div>
  
  <div className="head-box">
  <button className="delete" type="" onClick={()=>{
    onRemove(id)
  }}>삭제하기</button>
  <button className="complet" onClick={()=>{
  TodoDone(id)
  }}>{todo.isDone ? "취소" : "완료"}</button>
  </div>
  </div>
)
}

export default Todo;