// AllTrending.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const AllTrending = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Access data from location state

  console.log(data);
  const alltrends=data.trendingproducts.data
  console.log(alltrends);

  return (
    <div className='main-trending'>
{alltrends.map((obj)=><>
  <div className="cards">
<div className="image"><img src={`https://portal.umall.in/${obj.image}`} alt="" /></div>
<div className="contents">
  <div className="top">{obj.name}</div>
  <div className="bottum">
    <div className="category">{obj.desc}</div>
    <div className="price">{obj.price}</div>
  </div>
</div>

      </div>
</>)}
  
   
    </div>
  );
};

export default AllTrending;
