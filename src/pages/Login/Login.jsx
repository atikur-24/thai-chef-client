import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from '../../assets/icons/google.png'
import githubLogo from '../../assets/icons/github.png'

const Login = () => {
  const { googleSingIn, githubSingIn, userLogin } = useContext(AuthContext);

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError('')

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, {replace: true})
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };


    // google login
    const handleGoogleLogin = () => {
    googleSingIn()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => {
            const errorMessage = error.message;
        })
    }

    // github login
    const handleGithubLogin = () =>{
        githubSingIn()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }

  return (
    <Container className="my-5 pb-3">
        <h3 className="text-center fw-bold my-title">Login Your Account</h3>
      <Form onSubmit={ handleLogin } className="w-50 mx-auto">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-500 my-title">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-500 my-title">Password</Form.Label>
          <Form.Control className="mb-2" type="password" name="password" placeholder="Password" required />
          <p className="text-primary"><small style={{textDecoration:'underline'}}>forgot password</small></p>
        </Form.Group>


        <p className="py-2">
            {error && <small className="text-danger">{error}</small>}
        </p>

        <button className="my-button py-3 fw-bold w-100" type="submit">
          Login
        </button>
      </Form>

      <div className="w-50 mx-auto mt-5">
        <div className="d-flex justify-content-between align-items-center">
            <hr style={{border: '2px solid'}} className="w-25"/> 
            <span style={{fontSize: '18px'}} className="fw-semibold text-title">Or Sign in With</span>
            <hr style={{border: '2px solid'}} className="w-25" />
        </div>
        <div className="text-center mt-5">
            <img onClick={handleGoogleLogin} style={{cursor: 'pointer'}} className="me-5" src={googleLogo} alt="google" />
            <img onClick={handleGithubLogin} style={{cursor: 'pointer'}} className="" src={githubLogo} alt="google" />
        </div>
      </div>

      <div style={{marginTop: '100px'}} className="text-center">
        <p className="my-secondary">Don't have an Account ? <Link to='/signUp' >Register</Link></p>
      </div>

    </Container>
  );
};

export default Login;
