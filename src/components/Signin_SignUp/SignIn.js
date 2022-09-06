import React,{useState} from 'react';
import { Logincontext } from '../context/Contextprovider';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css";



const SignIn = () => {

    /* const {  setAccount } = useState(Logincontext);

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });

    // console.log(data);

    const adddata = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        setData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    };
    const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;
        // console.log(email);
        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });


            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("invalid details");
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            } else {
                setAccount(data);
                setData({ ...logdata, email: "", password: "" })
                toast.success("Login Successfully done 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log("login page ka error" + error.message);
        }
    };
 */


    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./download-removebg-preview.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form >
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                              
                                id="email" required />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                id="password" placeholder="At least 6 characters" required />
                        </div>
                        <button type="submit" className="signin_btn" ><NavLink to="/">Continue</NavLink></button> 
                    </form>
                    <ToastContainer />
                    
                </div>
                <div className="create_accountinfo">
                    <p>New to User?</p>
                    <button>  <NavLink to="/Register">Create your Account</NavLink></button>
                </div>
            </div>

        </section>
    )
}
export default SignIn
