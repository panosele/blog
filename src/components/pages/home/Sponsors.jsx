import React, {useState, useEffect} from 'react';
import './css/sponsors.css';

import axios from 'axios';


/**
 * Fetch sponsors data from the trustedUs API endpoint
 * and display the sponsor images in a carousel.
 *
 * @param {object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
function Sponsors(props) {
  // State to hold the sponsors data
  const [sponsors, setSponsors] = useState([]);

  // Fetch sponsors data on component mount
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/trustedUs/');
        
        // Update sponsors state if the data is different
        if (!response.data.includes(sponsors)) {
          setSponsors(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSponsors();
  }, []);

  // Display sponsors images in a carousel
  return (
    <>
      <hr className='carousel-hr'/>
      <div className="sponsors-div">
        <h1 className="sponsors-title">They trusted us:</h1>
        <div className='images-container'>
          {sponsors.map((sponsor, i) => (
            <img key={i} className="sponsor-img" src={sponsor.image} alt={sponsor.title} />
          ))}
        </div>
      </div>
      <hr className='carousel-hr'/>
    </>
  );
}

export default Sponsors;