import axios from "axios";
import { get } from "mongoose";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);

  const elRefs = useRef([]);

  function getAll(){
    fetch("/api/get")
    .then(res=> res.json())
    .then(data => {
      setTodos(data);
    });
  }

  useEffect(()=> {
    getAll();
  },[])


  const handleChange = (e) => {
    setWork(e.target.value);

    if (!e.target.validity.valid) {
      e.target.className = "form-control is-invalid";
      //elRefs.current["save"].setAttribute("disabled", "disabled")
    }
    else {
      e.target.className = "form-control is-valid";
      //elRefs.current["save"].removeAttribute("disabled");
      //elRefs.current["save"].addEventListener("click", save);
    }
  }

  function save(){
    let data = {
      work: work,
      isCompleted : false
    }

    axios.post("/api/add", data)
    .then(res=> {
      console.log(res.data);
      getAll();
      setWork("");
    })

  }

  async function remove(todo){
    let isConfirm = confirm("Kaydı silmek istiyor musunuz?")
    if(isConfirm){
      let result = await axios.post("/api/remove", todo);

      getAll();
    }    
  }


  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>

      <div className="d-flex justify-content-center mt-4">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="work">Yapılacak iş</label>
            <input
              type="text"
              id="work"
              autoComplete="off"
              className="form-control"
              required
              value={work}
              onChange={handleChange}
              minLength={3}
              ref={(ref) => elRefs.current["work"] = ref} />
            <div className="invalid-feedback">
              En az 3 karakter yazmalısınız!
            </div>
          </div>
          <div className="form-group mt-2">
            <button              
              onClick={save}
              className="btn btn-primary w-100"
              ref={(ref) => elRefs.current["save"] = ref}>
              Kaydet
            </button>
          </div>
          <div 
            ref={(res)=> elRefs.current["update-div"] = ref} className="form-group mt-2">
          <button              
              onClick={save}
              className="btn btn-warning w-100">
              Güncelle
            </button>
            <button              
              onClick={save}
              className="btn btn-danger w-100">
              Vazgeç
            </button>
          </div>
          <hr />
          <div className="form-group mt-2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Yapılacak</th>
                  <th>Durumu</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((val, index) => {
                  return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.work}</td>
                    <td>{val.isCompleted}</td>
                    <td>
                      <button className="btn btn-outline-warning btn-sm">Güncelle</button>
                      <button
                      onClick={()=> remove(val)}
                      className="btn btn-outline-danger btn-sm mx-1">Sil</button>
                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}
