import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import '../Home/home.css';
// images
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
import sports from "../../images/sports.jpg"



const FormContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  
  
  
`;

function Contactt() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (


        <>
            <div className='plans' style={{ backgroundImage: `url(${sports})` }}>
                <h1>Our Contact Us</h1>
            </div>
            <div className="txt-contact">
                <h4>Get In <span>Touch</span></h4>
                <h3>MAKE <span> APPOINTMENT</span>  </h3>
                <p>If you have any questions just let me know. If you have any questions or require support it will be answered</p>
            </div>
            <form onSubmit={handleSubmit} className="form-container" style={{ backgroundImage: `url(${contactBG})` }}>
                {/* <div className="image-container">
                    <img src={contactBG} alt="" />
                </div> */}
                <div className="container">
                    <div className="container-form">
                        <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Your Name"
                            onChange={handleChange}
                        />
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Your Email"
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            placeholder="Subject"
                            onChange={handleChange}
                        />
                        <Textarea
                            name="message"
                            value={formData.message}
                            placeholder="Your Message"
                            onChange={handleChange}
                        ></Textarea>
                        <button className="btn" type="submit" onChange={handleSubmit} >Send Message</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Contactt;
