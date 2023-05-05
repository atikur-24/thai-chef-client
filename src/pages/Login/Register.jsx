import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [show, SetShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);

    const handleSingUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setSuccess('');
        setError('');

        if(password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
        
        else if(password !== confirm) {
            setError('Your password did not match')
            return
        }
   
    
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                setSuccess('You has been Account created Successfully !')
                console.log(loggedUser);
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage);
            })

            console.log(name, photoUrl ,email, password, confirm);
    }


  return (
    <Container className="my-5 pb-3">
        <h3 className="text-center fw-bold my-title">Create a New Account</h3>
      <Form onSubmit={ handleSingUp } className="w-50 mx-auto">

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="font-500 my-title">Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="font-500 my-title">Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter Photo URL" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-500 my-title">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-500 my-title">Password</Form.Label>
          <Form.Control className="mb-2" type={ show ? "text" : "password" } name="password" placeholder="Password" required />
          <p onClick={ () => SetShow(!show) } style={{cursor: 'pointer', textDecoration: 'underline'}} className="d-inline">
            <small>{show ? <span>Hide password</span> : <span>Show password</span>}</small>
          </p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="font-500 my-title">Confirm Password</Form.Label>
          <Form.Control className="mb-2" type={ confirmShow ? "text" : "password"} name="confirm" placeholder="Confirm Password" required />
          <p onClick={ () => setConfirmShow(!confirmShow) } style={{cursor: 'pointer', textDecoration:'underline'}} className="d-inline">
            <small>{confirmShow ? <span>Hide password</span> : <span>Show password</span>}</small>
          </p>
        </Form.Group>

        <p>
            {success && <small className="text-success">{success}</small>}
            {error && <small className="text-danger">{error}</small>}
        </p>

        <button className="my-button py-3 fw-bold w-100" type="submit">
          Sign Up
        </button>
      </Form>

      <div style={{marginTop: '100px'}} className="text-center">
        <p className="my-secondary">Already have an account ? <Link to='/login' >Login</Link></p>
      </div>

    </Container>
  );
};

export default Register;