import React, { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import googleLogo from '../../assets/icons/google.png'
import githubLogo from '../../assets/icons/github.png'

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

      // google login
    const handleGoogleLogin = () => {
    googleSingIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    // github login
    const handleGithubLogin = () =>{
        console.log('github');
    }

  return (
    <Container className="my-5 pb-3">
        <h3 className="text-center fw-bold my-title">Login Your Account</h3>
      <Form className="w-50 mx-auto">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-500 my-title">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-500 my-title">Password</Form.Label>
          <Form.Control className="mb-2" type="password" name="password" placeholder="Password" required />
        </Form.Group>


        {/* <p>
            {success && <small className="text-success">{success}</small>}
            {error && <small className="text-danger">{error}</small>}
        </p> */}

        <button className="my-button py-3 fw-bold w-100" type="submit">
          Login Up
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
