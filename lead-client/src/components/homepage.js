import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";
import json2csv from "json2csv";
import data from './sampledata.json'

const { Parser } = require('json2csv');

const Homepage = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [leadLink, setLeadLink] = useState(''); 
    let [email, setEmail] = useState('');
    let [submission, setSubmission] = useState([]);
    let [waiting, setWaiting] = useState(false);
    let [CSVData, setCSVData] = useState([]);

    // base url to fetch scraping api
    const base_url = 'http://127.0.0.1:5000/';

    let [leadData, setLeadData] = useState(null);
    const headers = [
        {label: "Company", key: 'Company'},
        {label: "Name", key: 'Name'},
        {label: "Title", key: 'Title'},
        {label: "Phone Number", key: 'Phone Number'},
        {label: "Name Drop", key: 'Name_Drop'},
        {label: "Location", key: 'Location'},
        {label: "Linkedin", key: 'LinkedIn'}
    ]

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
            const json2csvParser = new Parser();
            let data = json2csvParser.parse(leadData)
            setCSVData(CSVData = data)
            console.log('the csv data is')
            console.log(CSVData)
        }
        )
        
    }
    
    const submitData = (e) => {
        e.preventDefault()
        setSubmission(submission = {
            "username": username,
            "password": password,
            "leadListLink":leadLink,
            "email": email
    })
        sendData()
    
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
                    <Form.Control type = 'password' placeholder ='Password' onChange = {(e) => setPassword(password = e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className = 'mb-4'>
                    <Form.Label>Enter Lead List URL:</Form.Label>
                    <Form.Control type = 'text' placeholder = 'Lead List' onChange = {(e) => setLeadLink(leadLink = e.target.value)}></Form.Control>
                </Form.Group>

                <Button className = 'm-3' type = 'submit' onClick = {submitData} >Get Leads</Button>
            </Form>
            
            <CSVLink data = {CSVData} filename={'Leads.csv'} className="btn btn-primary">Download Me</CSVLink>
            
        </Container> 
    )
}

export {Homepage}