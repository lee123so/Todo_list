
import "./style.css";


function Form ({todos,onRemove,title,cont,setCont,setTitle,setTodos,}) {
    return(
        <div>
        <div className="box">
        <div className="content-box">
          제목
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      내용
      <input type="text" value={cont}
      onChange={(event) => {
        setCont(event.target.value)
      }}
      />
      </div>
      <div className="add-box">
      <button 
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title,cont:cont }]);
        }}
    
      >
        추가하기
      </button>
      </div>
      </div>
      
      
      </div>
    )
}

export default Form;