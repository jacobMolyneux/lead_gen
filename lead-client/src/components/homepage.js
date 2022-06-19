import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";
import json2csv from "json2csv";
import data from './sampledata.json'
import { LoadingSign } from './loadingSign';
const { Parser } = require('json2csv');

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
    // holds csv data ?? 
    let [CSVData, setCSVData] = useState([]);

    

    // base url to fetch scraping api
    const base_url = 'http://127.0.0.1:5000/';

    
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
        const delimeter = `","`
        const opts = {delimeter}
        const response = await axios.post(base_url, {
            "username": submission['username'],
            "password": submission['password'],
            "leadListLink": submission['leadListLink'],
        })
        .then(function (response){
            console.log(response)
            setLeadData(leadData = response.data)
            console.log(`the lead data is: ${JSON.stringify(leadData)}`)
            const json2csvParser = new Parser(opts);
            let data = json2csvParser.parse(leadData)
            setCSVData(CSVData = data)
            
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