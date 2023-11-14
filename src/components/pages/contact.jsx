import React, { useState, useCallback } from "react";
import axios from "axios";
import "./css/contact.css"

function Contact (){
    const [info, setInfo] = useState({name:"", surname:"", email:"", message:""});
    const [newsLetterCheckValue, setNewsLetterCheckValue] = useState("false");

      /**
   * Function to post the user's input to the server
   */
    const postInfo = useCallback(async () => {
        if (newsLetterCheckValue === "true") {
            try {
                await axios.post("http://127.0.0.1:8000/newsletter/", {
                email: info.email,
                name: info.name,
                surname: info.surname,
                message: info.message
                });
            } catch (error) {
                console.error(error);
            }
            }else{
                // SEND EMAIL TO ADMIN
            }
        }, [info]);


    const handleInfoChange = useCallback((event) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            [event.target.id]: event.target.value,
        }));
    }, []);

    
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        postInfo();
        setInfo({name:"", surname:"", email:"", message:""});
    }, [postInfo]);



    return (
        <div className="form-div">

            <h1>CONTACT ME FORM</h1>

            <form action="" method="POST">

                <div className="elem-div">
                    
                    <input onChange={handleInfoChange} value={info.name} id="name" type="text" maxLength={20} placeholder="Name" required></input>
                </div>
                <div className="elem-div">
                    
                    <input onChange={handleInfoChange} value={info.surname} id="surname" type="text" maxLength={20} placeholder="Surname" required></input>
                </div>
                <div className="elem-div">
                    
                    <input onChange={handleInfoChange} value={info.email} id="email" type="email" maxLength={30} placeholder="Email" required></input>
                </div>
                <div className="elem-div">
                    <textarea onChange={handleInfoChange} value={info.message} id="message" type="textarea" maxLength={6000} rows={14} cols={100} placeholder="Message" required></textarea>
                </div>
                <div className="form-check">
                    <input class="form-check-input" type="checkbox" value={newsLetterCheckValue} id="newsletter-checkbox"  onClick={(e)=> newsLetterCheckValue === "true" ? setNewsLetterCheckValue("false") : setNewsLetterCheckValue("true")}/>
                    <label class="form-check-label check-label" for="newsletter-checkbox">
                        Agree for the Newsletter
                    </label>
                </div>
                <div className="elem-div">
                    <button type="submit" class="btn btn-outline-success btn-lg button" onClick={handleSubmit}>SEND</button>
                </div>
                
            </form>
        </div>
    )
}

export default Contact;

