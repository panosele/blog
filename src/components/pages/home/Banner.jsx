import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './css/banner.css';


/**
 * Component for displaying a rotating banner
 * @param {Object} props - The component props
 * @returns {JSX.Element} - The rendered component
 */
function Banner(props) {
    // State variables
    const [banners, setBanners] = useState([]); // Stores the fetched banners
    const [numOfArray, setNumOfArray] = useState(0); // Stores the current array index
    const [arrayToShow, setArrayToShow] = useState([]); // Stores the array of banners to show

    /**
     * Fetches the banners from the server
     * @returns {Promise<Array>} - The fetched banners
     */
    const getBanners = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/banners/');
            if (!response.data.includes('banners')) {
                setBanners(response.data);
            }
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // Fetch the banners when the component mounts
    useEffect(() => {
        getBanners();
    }, []);

    // Update the array of banners to show when the banners or numOfArray changes
    useEffect(() => {
        if (banners.length > 0) {
            const copyBanners = [...banners];
            const copyBannersShow = copyBanners.reduce((acc, banner, i) => {
                const index = Math.floor(i / 3);
                acc[index] = [...(acc[index] || []), banner];
                return acc;
            }, []);
            setArrayToShow(copyBannersShow[numOfArray]);
        }
    }, [banners, numOfArray]);

    useEffect(() => {
        if(!arrayToShow){
            setNumOfArray(0);
        }
    }, [arrayToShow]);

    // Rotate the banners every minute
    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumOfArray(numOfArray => (numOfArray + 1) % (banners.length || 1));
        }, 8000);
        return () => {
            clearInterval(intervalId);
        };
    }, [banners, numOfArray]);

    // Render the component
    return (
        <div className="general-aside left-aside">
            {banners.length > 0 && (
                <div>
                    {arrayToShow && arrayToShow.map((banner, i) => (
                        <img key={i} className="banner-img" src={banner.image} alt="" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Banner;