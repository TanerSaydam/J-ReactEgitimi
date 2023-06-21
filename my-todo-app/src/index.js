import ReactDOM from 'react-dom/client';
import {useState, useRef} from 'react';

function App(){
  const [work,setWork] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateIndex,setUpdateIndex] = useState(0);

  const addRef = useRef();
  const updateRef = useRef();
  const cancelRef = useRef();
  const ulRef = useRef();

  function add(){
    setTodos((prev)=> [...prev, work]);
    setWork("");
  }  

  function remove(index){
    let newTodos = todos.filter((p,i)=> {
      if(i !== index) return p; 
    });

    setTodos(newTodos);    
  }

  function get(index){
    setWork(todos[index]);
    setUpdateIndex(index);

    addRef.current.setAttribute("hidden","hidden");
    ulRef.current.setAttribute("hidden","hidden");
    updateRef.current.removeAttribute("hidden");
    cancelRef.current.removeAttribute("hidden");
  }

  function cancel(){
    addRef.current.removeAttribute("hidden");
    ulRef.current.removeAttribute("hidden");
    updateRef.current.setAttribute("hidden","hidden");
    cancelRef.current.setAttribute("hidden","hidden");
    setWork("");
  }

  function update(){
    let newTodos = todos.map((val,i)=> {
      if(i === updateIndex) return work;
      else return val;
    });

    setTodos(newTodos);
    cancel();

  }

  return(
    <>
    Work
    <input 
      value={work} 
      onChange={(e)=> setWork(e.target.value)}/>
    <button ref={addRef} onClick={add}>Ekle</button>
    <button ref={updateRef} onClick={update} hidden="hidden">Güncelle</button>
    <button ref={cancelRef} onClick={cancel} hidden="hidden">Vazgeç</button>
    <hr/>
    <ul ref={ulRef}>
      {
        todos.map((val,index)=> {
          return <li key={index}>
            {val}
            <button onClick={()=> get(index)}>Güncelle</button>
            <button onClick={()=> remove(index)}>Sil</button>
          </li>
        })
      }
    </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />  
);

