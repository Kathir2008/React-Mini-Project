import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const[email , setEmail] = useState();
  const[password, setPassword] = useState();
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    if (email !== "admin@123.com" || password !== "Pass123") {
      return alert("Invalided Email or Password")
    }
    else{
      navigate('/home')
      localStorage.setItem("Data",true)
    }
  }
  
  useEffect(()=>{
    if(localStorage.getItem("Data")) return navigate('/home')
  })

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/919/677/original/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
                alt="Google Logo"
                className="mb-4"
                height={"150px"}
              />
              <form className='form-group' onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div><br />
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div><br />
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
