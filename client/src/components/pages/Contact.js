import React, { Component } from 'react';
import ContainerIn from './ContainerIn';
import * as emailjs from 'emailjs-com'


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            buttonText: 'Send Message'
          }
    }
    handleChange = event => {
        const { name, value } = event.target;

        return this.setState({ [name]: value })
    }

    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
          buttonText: 'Send Message'
        })
      }

    formSubmit = e => {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        this.setState({buttonText: '...sending'});
        let templateParams = {
          from_name: email,
          name: name,
          to_name: 'hacopian.m@gmail.com',
          subject: subject,
          message_html: message,
         }
         emailjs.send(
          'gmail',
          'template_s1630qqT',
           templateParams,
          'user_U4jwH00eqO8mBcg3yzJwf'
         )
         setTimeout(() => {
            this.resetForm()
         }, 2000);
    }



    render() {
        return (
            <ContainerIn>
                <h3>Contact</h3>
                <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="message-input">Message</label>
                            <textarea onChange={this.handleChange} name="message" id="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required />
                        </div>
                        <div>
                            <label htmlFor="message-name"> Name</label>
                            <input onChange={this.handleChange} name="name" id="message-name" type="text" placeholder="Your Name" value={this.state.name} />
                        </div>
                        <div>
                            <label htmlFor="message-email">Email</label>
                            <input onChange={this.handleChange} name="email" id="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
                        </div>
                        <div>
        <button type="submit" className="btnSubmit">{this.state.buttonText}</button>
                        </div>
                    </div>
                </form>
            </ContainerIn>
        )
    }
}

export default Contact;