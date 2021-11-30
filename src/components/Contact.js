import React, { Component } from 'react';
import './Control.css';
export class Contact extends Component {
    static displayName = Contact.name;
    constructor(props) {
        super(props);
        this.state = { email:'devkumarpal@gmail.com'};
    }
    render() {
        return (
            <div className='page'>
                <span className='pagehe0'>
                    <h1>For Support,Complain and Help:</h1>
                </span>
                <h1>Contact details:</h1>
                <div className='pagehe1'>
                    
                    <h3>Email:devkumarpal@gmail.com</h3>
                </div>
                <div className='pagebu'>
                    <button onClick={() => { navigator.clipboard.writeText(this.state.email) }}>COPY</button>
                </div>
                <div className='pagehe2'>
                    <h3>Phone:7457935579</h3>
                    <h3>Youtube Channel:<a href='https://www.youtube.com/channel/UCPkyg4Q9iKflb_DB9bmI0tQ'>Team 7</a></h3>
                </div>
                
                <h1>Website Designer Details:</h1>
                <div className='pagehe3'>
                    <h3>Name: Dev Kumar Pal</h3>
                    <h3>Profession: Student</h3>
                    <h3>Freinds: Divyanshu and Rohit</h3>
                </div>
                <h1>Thank you for Visiting My First Website</h1>
                <div>
                    <h1>SINCE 2021</h1>
                </div>
            </div>
            
            );
    }
}