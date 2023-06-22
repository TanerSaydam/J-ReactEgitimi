import Head from "next/head";
import { useRef, useState } from "react";

export default function Home() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);

  const elRefs = useRef([]);

  const handleChange = (e) => {
    setWork(e.target.value);

    if (!e.target.validity.valid) {
      e.target.className = "form-control is-invalid";
      elRefs.current["save"].removeAttribute("disabled")
    }
    else {
      elRefs.current["save"].setAttribute("disabled", "disabled")
      e.target.className = "form-control is-valid";
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
              disabled
              className="btn btn-primary w-100"
              ref={(ref) => elRefs.current["save"] = ref}>
              Kaydet
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
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.work}</td>
                    <td>{val.isCompleted}</td>
                    <td>
                      <button className="btn btn-outline-warning btn-sm">Güncelle</button>
                      <button className="btn btn-outline-danger btn-sm mx-1">Sil</button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}
