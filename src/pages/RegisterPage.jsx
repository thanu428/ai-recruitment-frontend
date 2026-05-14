import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    firstName:"",
    lastName:"",
    email:"",
    password:""
  });

  function handleChange(e){

    setFormData({

      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(){

    navigate("/home");
  }

  return (

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:
          "linear-gradient(to right,#141e30,#243b55)"
      }}
    >

      <div
        style={{
          background:"white",
          padding:"50px",
          borderRadius:"20px",
          width:"400px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.3)"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"30px"
          }}
        >
          Create Account
        </h1>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={{
            width:"100%",
            padding:"15px",
            border:"none",
            borderRadius:"10px",
            background:"#2563eb",
            color:"white",
            fontSize:"16px",
            cursor:"pointer"
          }}
        >
          Register
        </button>

      </div>

    </div>
  );
}

const inputStyle = {

  width:"100%",
  padding:"15px",
  marginBottom:"20px",
  borderRadius:"10px",
  border:"1px solid #cbd5e1",
  fontSize:"16px"
};

export default RegisterPage;