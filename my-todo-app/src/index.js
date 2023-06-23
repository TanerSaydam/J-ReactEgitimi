import ReactDOM from 'react-dom/client';
import {useState, useRef} from 'react';
import Add from './add';
import List from './list';

function App(){
  const [work,setWork] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateIndex,setUpdateIndex] = useState(0);
  const refs = useRef([]);

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
    {/* Ekleme işlemini index sayfasından add sayfasına taşıdım. Add sayfasında kullanmam gereken metot ve propertyleri props olarak gönderdim */}
    <Add work={work} setWork={setWork} addRef={addRef} add={add} update={update} cancel={cancel} updateRef={updateRef} cancelRef={cancelRef}/>
    <hr/>


    {/* Listeleme işelmini indexsayfasından list sayfasına taşıdım List sayfasında kullanmam gereken metot ve propertyleri props olarak gönderdim. */}
    <List ulRef={ulRef} todos={todos} get={get} remove={remove}/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />  
);

