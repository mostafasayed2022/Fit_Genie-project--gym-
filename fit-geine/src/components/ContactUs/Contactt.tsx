import React, { useState } from "react";
import '../Home/home.css';
// images
import services from "../../images/services.jpg";
import contactBG from "../../images/contactBg.jpg";
import sports from "../../images/sports.jpg"


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
            {/* <div className="txt-contact">
                <h4>Get In <span>Touch</span></h4>
                <h3>MAKE <span> APPOINTMENT</span>  </h3>
                <p>If you have any questions just let me know. If you have any questions or require support it will be answered</p>
            </div> */}
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="class1">Get in <span>Touch</span> </h2>
                    <h1 className="class2">Convey Your Ideas to Us</h1>
                    <p className="class3">
                        Contact us for questions, technical assistance, or collaboration
                        opportunities via the contact information provided.
                    </p>
                    <ul>
                        <li>📞 +201111453894</li>
                        <li>✉️ MostafaSayed123@gmail.com</li>
                        <li>📍 123 Anywhere ST., Any City, 12345</li>
                    </ul>
                </div>
                <form className="contact-form">
                    <div className="input-group3">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="groups">
                        <div className="input-group3">
                            <label htmlFor="email">Email</label>
                            <input className="input1" type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="input-group3">
                            <label htmlFor="phone">Phone Number</label>
                            <input className="input1" type="tel" id="phone" placeholder="Your Phone Number" />
                        </div>
                    </div>
                    <div className="input-group3">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn" type="submit">Submit Now</button>
                </form>
            </div>
        </>
    );
}

export default Contactt;
