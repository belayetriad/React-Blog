import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeaderComponent from "../shared/pageHeader/PageHeader.component";
import './Login.style.css';
export default function LoginComponent(){ 

    const [erros, setErrors] = useState();
    const [meesage, setMeesage] = useState();
    const navigate = useNavigate();

    const submit = (event)=> {
        event.preventDefault();
        const formValue = event.target;
        const formData = {
            email: formValue.email.value,
            password: formValue.password.value,
        } 
        axios.post(`http://localhost:3001/user/login`, formData, {validateStatus: function (status) {
            if(status === 401){ 
                setMeesage('');
                setErrors('Your Credential wrong') 
            }else {
                return status;
            }
        }})
        
      .then((response) => {
         
        setErrors('')
        setMeesage('Successfully Logedin')
        const token = response.data.token;
        localStorage.setItem('token', token) 
        navigate("/admin"); 
      }).catch(function (error) {
        console.log(error.toJSON());
      });
        
    }
    return(
        <>
            {/* <!-- Page Header--> */}
            <PageHeaderComponent title={'Login'} subTitle={''} bgImage={'/assets/img/contact-bg.jpg'} />
            {/* <!-- Main Content--> */}
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="col-md-10 col-lg-8 col-xl-7"> 
                            <div className="my-5"> 
                                <form id="contactForm" onSubmit={(event)=> {submit(event)}}> 
                                    <div className="form-floating">
                                        <input className="form-control" id="email" name="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="password" name="password" type="password" placeholder="Enter your password number..." data-sb-validations="required" />
                                        <label htmlFor="password">Password</label>
                                        <div className="invalid-feedback" data-sb-feedback="password:required">A password number is required.</div>
                                    </div>

                                    {erros && <div className="invalid-feedback" style={{display: 'block'}}>{erros}</div>}
                                    {meesage && <div className="valid-feedback" style={{display: 'block'}}>{meesage}</div>}
                                    
                                    {/* <!-- Submit Button--> */}
                                    <button className="btn btn-primary text-uppercase" id="submitButton" type="submit" >Login</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}