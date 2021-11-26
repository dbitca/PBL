import React, { useState, useContext } from 'react';
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthContext from '../store/auth-context';
import Connect from "../components/Connect"
const Register = ()  =>{
  const [mail, setMail] = useState("");
  const [idnp, setIdnp] = useState("");
  const [code, setCode] = useState("");

  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);
  return (
    <Connect
        actionUrl="/forgot-password"
        action="Forgot password ?"
        actionUrl2="/login"
        action2="Log In"
        page="Register"
    >
      <Input 
        type="text" 
        image={email} 
        altImg="idnp" 
        placeholder="IDNP" 
        onChange={(e)=>setIdnp(e.target.value)}
      />
      <Input 
        type="password"
        image={pass}
        altImg="code"
        placeholder="Code"
        onChange={(e)=>setCode(e.target.value)}
      />
      <Input 
        type="text" 
        image={email} 
        altImg="email" 
        placeholder="E-mail" 
        onChange={(e)=>setMail(e.target.value)}
      />
      <Input 
        type="password"
        image={pass}
        altImg="code"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Button
        buttonClassName="login-button"
        title="Register"
        onClick={()=>{
        console.log(mail);
        console.log(code);
        console.log(password);
        console.log(idnp);
        authCtx.updateAuth(true);
        authCtx.updateUser(mail);
      }} />
    </Connect>
  );
}

export default Register;
