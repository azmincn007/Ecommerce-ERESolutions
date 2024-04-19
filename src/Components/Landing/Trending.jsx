import React from 'react';
import { useQuery } from 'react-query';
import './trending.css'; // Import the external CSS file
import { useNavigate } from 'react-router-dom';

function Trending() {
  const navigate = useNavigate();

  // Function to fetch trending data
  const fetchTrendingData = async () => {
    const response = await fetch('https://portal.umall.in/api/trending_products?shopid=15&userid=652', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify({
        // Add any parameters required by your API
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery('trendingData', fetchTrendingData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Extracting the first 5 images
  const trendingImages = data.trendingproducts.data.slice(0, 10);
  console.log(trendingImages);

  // Prepend base URL to image URLs
  const baseURL = 'https://portal.umall.in/';
  const imageURLs = trendingImages.map(image => baseURL + image.image);
  console.log(imageURLs);

  const handleViewAll = () => {
    navigate('/alltrending', { state: { data } });
  };

  return (
    <div className='trendingbox'>
      <h2 className='verticaltext'>explore our trending products</h2>
      <div className="left-image">
        <img src={imageURLs[3]} alt="" />
      </div>
      <div className="right-image">
        <div className="top">
          <img src={imageURLs[4]} alt="" />
          <img src={imageURLs[8]} alt="" />
        </div>
        <div className="bottom">
          <img src={imageURLs[7]} alt="" />
          <img src={imageURLs[9]} alt="" />
        </div>
      </div>
      {/* Button positioned at top right */}
      <button onClick={handleViewAll} className="view-all-button">View All</button>
    </div>
  );
}

export default Trending;
