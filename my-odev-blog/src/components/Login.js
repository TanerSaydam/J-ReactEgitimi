import React, { useRef, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const loginRef = useRef();  

  const checkInputValids = () =>{
    if(emailRef.current.validity.valid && passwordRef.current.validity.valid){
      loginRef.current.removeAttribute("disabled");
    }else{
      loginRef.current.setAttribute("disabled", "disabled");
    }
  }
  
  const setEmailValue = (e) => {
    setEmail(e.target.value);

    if(!e.target.validity.valid){
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
      // e.target.className = "form-control is-invalid"
    }else{
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    }

    checkInputValids();
  }

  const setPasswordValue = (e) => {
    setPassword(e.target.value);

    if(!e.target.validity.valid){
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
      // e.target.className = "form-control is-invalid"
    }else{
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    }

    checkInputValids();
  }

  

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-12 col-md-8 col-lg-6'>
          <div className='card'>
            <div className='card-header'>
              <h1>Login Page</h1>
            </div>
            
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input 
                  id="email" 
                  ref={emailRef}
                  className='form-control' 
                  required
                  type="email"
                  autoComplete='off'
                  value={email}                  
                  onChange={setEmailValue}
                  />
                <div className='invalid-feedback'>
                  Geçerli bir mail adresi yazın!
                </div>
              </div>

              <div className='form-group mt-2'>
                <label htmlFor='password'>Password</label>
                <input 
                  ref={passwordRef}
                  id="password" 
                  type='password'
                  className='form-control' 
                  required 
                  minLength="6"
                  onChange={setPasswordValue}
                  value={password}/>
                <div className='invalid-feedback'>
                  Şifre en az 6 karakter olmalıdır
                </div>                
                {/* 
                  element.test("/a-z/")
                <ul>
                  <li><del style={{color:"red"}}>Büyük harf içermelidir</del></li>
                  <li>Küçük harf içermelidir</li>
                  <li>Sayı içermelidir</li>
                  <li>Özel Karakter içermelidir</li>
                  <li>En az 6 karakter olmalıdır</li>
                </ul> */}
              </div>

              <div className='form-group mt-2'>
                <button ref={loginRef} disabled className='btn btn-outline-primary w-100'>Giriş Yap</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login;
