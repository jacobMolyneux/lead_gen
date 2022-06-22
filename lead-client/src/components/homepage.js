import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { LoadingSign } from './loadingSign';
import CsvDownload from 'react-json-to-csv';


const Homepage = () => {
    // user information to login to linkedin
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [leadLink, setLeadLink] = useState(''); 
    // holds response from api
    let [leadData, setLeadData] = useState(null);
    // holds user request information and send to api
    let [submission, setSubmission] = useState([]);
    // use for loading sign when scrape is happening
    let [waiting, setWaiting] = useState(false);
    

    // base url to fetch scraping api
    const base_url = 'http://127.0.0.1:5000/';


    const sendData = async () => {
        
        const response = await axios.post(base_url, {
            "username": submission['username'],
            "password": submission['password'],
            "leadListLink": submission['leadListLink'],
        })
        .then(function (response){
            console.log(response)
            setLeadData(leadData = response.data)
            console.log(`the lead data is: ${JSON.stringify(leadData)}`)
        }
        )
        
    }
    
    const submitData = (e) => {
        e.preventDefault()
        setSubmission(submission = {
            "username": username,
            "password": password,
            "leadListLink":leadLink,
            
    })
        sendData()
        setWaiting(true)
    
    }
    if(waiting == false && leadData == null){
            return(
        <Container>
            <Form className = 'border p-4 rounded '> 
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Username:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Username' onChange = {(e) => setUsername(username = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Password:</Form.Label>
                    <Form.Control type = 'password' placeholder ='Password' onChange = {(e) => setPassword(password = e.target.value)}></Form.Control>
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
    else if(waiting == true && leadData == null){
        return (
            <LoadingSign/>
        )
    }
    else if(leadData != null){
        return (
            <Container>
            <Form className = 'border p-4 rounded '> 
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Username:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Username' onChange = {(e) => setUsername(username = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Password:</Form.Label>
                    <Form.Control type = 'password' placeholder ='Password' onChange = {(e) => setPassword(password = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Lead List URL:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Lead List' onChange = {(e) => setLeadLink(leadLink = e.target.value)}></Form.Control>
                </Form.Group>

                <Button className = 'm-3' type = 'submit' onClick = {submitData}>Get Leads</Button>
            </Form>
            
            <CsvDownload data={leadData} />
        </Container> 
        )
    }
}

export {Homepage}