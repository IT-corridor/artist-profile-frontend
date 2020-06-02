import React, {Component} from "react";
import Parser from 'html-react-parser';
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import alertify from "alertifyjs";
import {url_back} from './Consts'


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
	(val) => val.length > 0 && (valid = false)
  );
  return valid;
}


class Form extends Component
{
	constructor(props) {
		super(props);

		this.state = {
			phone_number: null,
			email: null,
			name: null,
			message: null,
			original_work_by_artist: false,
			limited_edition_prints_sculpture: false,
			newsletter_from_artist: false,
			errors: {
				phone_number: '',
				name: '',
				email: '',
				message: '',
			}
		}
	}

	 handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
		  case 'name':
			errors.name =
			  value.length < 5
				? 'Name must be 5 characters long!'
				: '';
			break;
		  case 'email':
			errors.email =
			  validEmailRegex.test(value)
				? ''
				: 'Email is not valid!';
			break;
		  default:
			break;
		}

		this.setState({errors, [name]: value});
	}

	handleSubmit = (event) => {
	  event.preventDefault();
	  if(validateForm(this.state.errors)) {
		   event.preventDefault()
       const {
         original_work_by_artist,
         limited_edition_prints_sculpture,
         newsletter_from_artist,
       } = this.state;

       if (original_work_by_artist || limited_edition_prints_sculpture || newsletter_from_artist) {
  		   let fileds = {
  			  'email':'Email',
  			  'phone_number':'Phone Number',
  			  'name':'Name',
  			  'message':'Message',
  		   }


  		   axios.post(url_back+'/util/contact/', this.state).then(response => {
  				alertify.success(response.data.message)
          this.setState({
            original_work_by_artist: false,
            limited_edition_prints_sculpture: false,
            newsletter_from_artist: false,
          })
  				document.getElementById("contact").reset();
  			})
  				.catch(error => {
  					let data = error.response.data
  					Object.keys(data).map((keyName, i) => (

  						Object.keys(data[keyName]).map((keyName2, s) => (
  							 alertify.error('<div class="label-alertify">'+fileds[keyName]+'</div> '+data[keyName][keyName2])
  						))
  					))
  		   })
       } else {
          alertify.error('You must check at least one checkbox.');
        }
	  }
	}


	handleChangePhone = (event) => {
		this.setState({
			phone_number: event
		})
	}

	changeCheckbox = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: !this.state[name]});
	}



	render()
	{
		const {errors} = this.state
		let email_content = this.props.email_content

		return (
			   <section className="fade-in-section container parallax-container parallax-container-parent form-banner  hero" id="3_connect">
						   <div className="heading">
							   {Parser(email_content)}
						   </div>
						   <div className="form-banner-inner">
							   <form onSubmit={this.handleSubmit} noValidate id="contact">
								  <div className="checkbox-panel ">

										<div className="pretty p-svg p-plain ">
											<input
                        type="checkbox"
                        onChange={this.changeCheckbox}
                        name="original_work_by_artist"
                        checked={this.state.original_work_by_artist}
                      />
											<div className="state label-first">
												<img className="svg" src="/images/task.png" />
												<label>Inquire about original work by Robert. </label>
											</div>
										</div>

										 <div className="pretty p-svg p-plain">
											<input
                        type="checkbox"
                        onChange={this.changeCheckbox}
                        name="limited_edition_prints_sculpture"
                        checked={this.state.limited_edition_prints_sculpture}
                      />
											<div className="state">
												<img className="svg" src="/images/task.png" />
												<label>Inquire about Robert’s limited
											   edition prints and sculpture.</label>
											</div>
										</div>
										<div className="pretty p-svg p-plain">
											<input
                        type="checkbox"
                        onChange={this.changeCheckbox}
                        name="newsletter_from_artist"
                        checked={this.state.newsletter_from_artist}
                      />
											<div className="state">
												<img className="svg" src="/images/task.png" />
												<label>To receive a very occasional newsletter
											   from Robert’s studio please sign up here.</label>
											</div>
										</div>

									   </div>
								   <div className="form-panel">
									   <div className="form-group">
										   <input type="text" required="required" name='name'  onChange={this.handleChange} noValidate />
										   <label className="control-label">Name</label>
									   </div>
									   <div className="form-group">
										   <input type="text" required="required" name='email' onChange={this.handleChange} noValidate />
										   <label className="control-label">Email</label>
									   </div>
									   <div className="form-group">
										   <PhoneInput  country="us" onChange={this.handleChangePhone} required="required"  value={this.phone_number}
										   name='phone_number'  noValidate/>
									   </div>
								   </div>

								   <div className="form-panel">
								   <div className="form-group">
											 {errors.email.length > 0 && <div className='error'>{errors.email}</div>}
													  </div>

								   <div className="form-group">
										   {errors.phone_number.length > 0 && <div className='error'>{errors.phone_number}</div>}
													  </div>

								   <div className="form-group">
												 {errors.name.length > 0 && <div className='error'>{errors.name}</div>}
													  </div>
									</div>

								   <div className="form-group">
									   <textarea required="required" name='message'  onChange={this.handleChange} noValidate></textarea>
									   <label className="control-label">Messages</label>
								   </div>

								   <div className="form-group">
												 {errors.message.length > 0 && <div className='error'>{errors.message}</div>}
													  </div>

								   <button type="submit" className="send-btn button">Send</button>
							   </form>
						   </div>
				</section>
		)
	}
}

export default Form