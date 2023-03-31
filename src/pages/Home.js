import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard'

const style ={
  heading: `text-6xl font-bold text-gray-800`,
}

const Home = () => {
  return (
    <>
    
    <div className="container mx-auto px-4">
      <h1 classname={style.heading}>The Best of Entertainment</h1>
      <EntertainmentCardSlider />
    </div>
    </>
  );
};

export default Home;