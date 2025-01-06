import React, { useState } from "react";
// import navigate from
function LoginPage() {
  const [email, setEmail] = useState("");
  //const navigate=useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password); 
    //alert("Login Successful!");
    var req= await  axios.post("/http://localhost:3004/login",{
      email,password
    })
    console.log(req.data)
    var isLoginSuccessful= req.data.isLoggedIn
    console.log(isLoginSuccessful);
    if(isLoginSuccessful){
      Navigate('/UseMemo')
      var message=req.data.message
      console.log(message);
    }
  }
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
