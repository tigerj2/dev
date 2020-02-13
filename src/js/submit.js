import React from 'react';
import axios from 'axios';
import { fstat, writeFile } from 'fs';

class sub extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }
  handleSubmit(e) {
    e.preventDefault();

    axios({
		method: "POST", 
		url:"https://mailthis.to/jyao413@aucklanduni.ac.nz", 
		data:  this.state
	  })
	console.log(this.state)
	this.resetForm()

  }
  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(
  	// <div className="App">
  	// <form action="https://mailthis.to/tigerj20" method="POST" encType="multipart/form-data">
  	// <div className="form-group">
    //   	<label htmlFor="name">Name</label>
    //   	<input type="text" className="form-control" id="name"/>
  	// </div>
  	// <div className="form-group">
    //   	<label htmlFor="exampleInputEmail1">Email address</label>
    //   	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
  	// </div>
  	// <div className="form-group">
    //   	<label htmlFor="message">Message</label>
    //   	<textarea className="form-control" rows="5" id="message" />
  	// </div>
  	// <button type="submit" className="btn btn-primary">Submit</button>
  	// </form>
  	// </div>


	<div className="App">
	<form action="https://mailthis.to/tigerj20" method="POST" encType="multipart/form-data">
	<div className="form-group">
		<label htmlFor="name">Name</label>
	<input type="text" className="form-control" name="name" placeholder="Your name"/>
	</div>
	<div className="form-group">
		<label htmlFor="exampleInputEmail1">Email address</label>
		<input className="form-control" type="email" name="_replyto" placeholder="Your email"/>
	</div>
	<div className="form-group">
		<label htmlFor="message">Message</label>
		<textarea className="form-control" name="message" rows="5" placeholder="Enter your message here"></textarea>
	</div>
	<input type="hidden" name="_after" value="http://localhost:3000/"/>

	<button type="submit" className="btn btn-primary">Submit</button>
	</form>
	</div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default sub;