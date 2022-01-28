import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [leadLink, setLeadLink] = useState(''); 
    let [submission, setSubmission] = useState([]);


    const submitData = (e) => {
        e.preventDefault()
        setSubmission(submission = {
            "Username": username,
            "Password": password,
            "Link":leadLink
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