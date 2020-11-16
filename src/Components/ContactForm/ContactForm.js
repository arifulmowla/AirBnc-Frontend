import { Button } from 'react-bootstrap';
import React from 'react';
import { useForm } from "react-hook-form";
import profile from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.png'

const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact-form">
            <div className="row">
                <div className="col-md-10">
                    <dic className="head-contact">
                        <h4>Travelling form work?</h4>
                        <p>Say hello to your host</p>
                        <p>Let Rowdra know a little about yourself and why you’re coming.</p>
                    </dic>



                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <textarea name="message" ref={register({ required: true })} className="form-control" rows="5" />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <Button className="btn btn-success mt-3">Continue</Button>
                    </form>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <div className="profile">
                        <img src={profile} alt="" className="w-100" />
                        <p className="text-center">John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;