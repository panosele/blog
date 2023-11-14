import React, {useState, useCallback} from 'react';
import './css/newsletter.css';

import axios from 'axios';


/**
 * Newsletter Component
 * 
 * This component renders a newsletter subscription form.
 * It allows users to enter their email address and subscribe to the newsletter.
 */
function Newsletter() {
  // State to store the user's input
  const [info, setInfo] = useState("");

  /**
   * Function to post the user's input to the server
   */
  const postInfo = useCallback(async () => {
    try {
      await axios.post("http://127.0.0.1:8000/newsletter/", {
        email: info,
      });
    } catch (error) {
      console.error(error);
    }
  }, [info]);

  /**
   * Function to handle changes in the input field
   * @param {Object} event - The input change event
   */
  const handleInfoChange = useCallback((event) => {
    setInfo(event.target.value);
  }, []);

  /**
   * Function to handle the form submission
   * @param {Object} event - The form submission event
   */
  const handleClick = useCallback((event) => {
    event.preventDefault();
    postInfo();
    event.target.innerHTML = "Subscribed!";
    event.target.disabled = true;
    document.querySelector(".input").value = "";
  }, [postInfo]);

  /**
   * Render the newsletter subscription form
   */
  return (
    <>
      <div className="newsletter-div">
        <h3>Newsletter</h3>
        <p className="news-p">
          Subscribe to our newsletter<br />to stay up to date with the latest
          news
        </p>

        <form action="" className="form" type="submit" method="POST">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleInfoChange}
          />
          <button
            type="submit"
            className="news-btn"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;