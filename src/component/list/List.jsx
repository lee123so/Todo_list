
import Todo from "../todo/Todo"

const List = ({todos,setTodos}) =>{
  const onRemove = (id) => {
    setTodos(todos.filter(todos => todos.id !== id));
  };
  // const falseList = todos.filter(todo =>(
  //   todo.isDone === false
  // ));
  const trueList = todos.filter(todo =>(
    todo.isDone === true
  ));
  
const TodoDone = id => {
  setTodos(
    todos.map((todo)=>
     todo.id === id ?{...todo, isDone : !todo.isDone}:todo 
     //전개연산자
     //map를 이용하여 todos안의 todo 객채중 특정 id를 가진 todo의 isDone 값을 반전 시킨다.
     //id값이 todo.id와 같을경우 새로운 객체를 생성, 
     //다를경우 처음 상태 그대로 반환합니다. (todo.id===id ? .. : .. ).
     //즉, todos배열에서 변화가 필요한 원소만 업데이트되고 나머지는 그대로 남게됩니다
     )
     )
    };

  
    return(
    <div>
    <h1>Todo List</h1>
        <div className="todos-container">
          { todos.map((todo) => {
            if(!todo.isDone){
              return(
            <Todo key={todo.id} {...todo} onRemove={onRemove} todo = {todo}  TodoDone={TodoDone}/>
            )
          }else{
            return null
          }
         } )}
        
        </div>
        <h1>is Done...</h1>
        <div className="todos-container">
        { trueList.map((todo) => {
            if(todo.isDone){
              return(
            <Todo key={todo.id} {...todo} onRemove={onRemove} todo = {todo} TodoDone={TodoDone}/>
            )
          }else{
            return null
          }
         } )}
        </div>
        </div>
    )
  }

//   function IsDone (){
//     <div>
//     <h1>Todo List</h1>
//     <div className="todos-container">
//       {todos.map((isDone) => (
//         <div className="todo" key={todo.id}>
//           <div className="todo-title">
//           {todo.title}
//           </div>
          
//           <div className="todo-content">
//           {todo.cont}
//         </div>
//         <TodoButton key={todo.id} {...todo} onRemove={onRemove} />
//         </div>
//       ))}
      
//     </div>  
//     </div>  
// }

export default List;