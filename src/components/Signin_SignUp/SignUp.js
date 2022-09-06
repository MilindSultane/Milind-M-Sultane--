import { Divider } from '@mui/material'
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

/*   const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});

// console.log(udata);

const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);

    setUdata((pre) => {
        return {
            ...pre,
            [name]: value
        }
    })
};

const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = udata;
  try {
        const res = await fetch("/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
          toast.warn("Invalid Details 👎!", {
              position: "top-center"
          });
      } else {
          setUdata({
              ...udata, fname: "", email: "",
              mobile: "", password: "", cpassword: ""
          });
          toast.success("Registration Successfully done 😃!", {
              position: "top-center"
          });
      }
  } catch (error) {
      console.log("front end ka catch error hai" + error.message);
  }
} */
  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./download-removebg-preview.png" alt="signupimg" />
                </div>
                <div className="sign_form">
<form method='POST'>
<h1>Sign Up</h1>
<div className="form_data">
<label htmlFor="name">Name</label>
<input type="text" name="fname"id="fname" 
 required/>
</div>
<div className="form_data">
<label htmlFor="email">Email</label>
<input type="email" name="email"id="email"  required/>
</div>
<div className="form_data">
<label htmlFor="mobile">Mobile Number</label>
<input type="number" name="mobile" id="mobile"  required />
</div>
<div className="form_data">
<label htmlFor="email">Password</label>
<input type="password" name="password" id="password" 
  required
/>
</div>
<div className="form_data">
<label htmlFor="email">Confirm Password</label>
<input type="password" name="cpassword" id="cpassword"
 required />
</div>
 <button type="submit" className="signin_btn" ><NavLink to="/login">Sign UP</NavLink></button> 
 <Divider/>
 <div className="signin_info">
 <p>Already have an account?</p>
 <NavLink to="/login">Sign in</NavLink>

 </div>
</form>
                </div>
                <ToastContainer />
                
                </div>
        </section>
  )
}

export default SignUp
