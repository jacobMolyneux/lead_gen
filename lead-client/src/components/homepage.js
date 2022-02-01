import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Homepage = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [leadLink, setLeadLink] = useState(''); 
    let [email, setEmail] = useState('');
    let [submission, setSubmission] = useState([]);
    const base_url = 'http://127.0.0.1:5000/';

    
    const submitData = (e) => {
        e.preventDefault()
        setSubmission(submission = {
            "Username": username,
            "Password": password,
            "Link":leadLink,
            "Email": email
    })
    console.log(submission)
    }
    
    return(
        <Container>
            <Form className = 'border p-4 rounded '> 
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Username:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Username' onChange = {(e) => setUsername(username = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Password:</Form.Label>
                    <Form.Control type = 'text' placeholder ='Password' onChange = {(e) => setPassword(password = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Email to send leads to:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Enter Email' onChage = {(e) => setEmail(email = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Lead List URL:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Lead List' onChange = {(e) => setLeadLink(leadLink = e.target.value)}></Form.Control>
                </Form.Group>

                <Button className = 'm-3' type = 'submit' onClick = {submitData} >Get Leads</Button>
            </Form>
        </Container> 
    )
}

export {Homepage}