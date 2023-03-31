import { Route, Router, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import NavbarComp from './components/Navbar/NavbarComp';
import MianCarousal from './components/Main_Carousal/mianCarousal';
import EntertainmentCardSlider from './components/Entertainment/EntertainmentCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PosterSlider from './components/Slider/PosterSlider';
import PremiereImage from './config/TempPoster';

//HOC
import MovieLayout from './Layouts/MovieLayout';
import MovieHOC from './HOC/MovieHOC';

//pages
import Home from './pages/Home';
import Movie from './pages/Movie';







const style ={
  division: `container mx-auto px-6 pb-16`,
  heading: `text-2xl font-bold text-gray-800 py-4 px-2`,
 prem: `rounded-xl py-4 px-6`,
 H3: `text-gray-700 font-bold text-xl px-5 py-3`,
 dark: `bg-navColor-900 py-4`,
 online: `rounded-xl py-4 px-7`

}







function App() {
  return (
    //these empty tags are called fragements 
    // i just swiched up exact components line to this "element={<Home />}"
    //path, exact is one of the properties
    <>

     <MovieHOC path="/movie/id" exaxt element={Movie} />
      
      <NavbarComp />
      <MianCarousal />


      <div>
        <PosterSlider images={PremiereImage} title="Recommended Movies" subtitle="" 
        isDark={false} />
      </div>
      

      <div className={style.division}>
      <h1 className={style.heading}>The Best Of Live Events</h1>
      <EntertainmentCardSlider />
      </div>



    <div className={style.dark}>

      <div className="flex">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="PreImage" 
        className='px-14 w-full h-full'
        />
      </div>

      <div className="rounded-xl py-3 px-7">
      <PosterSlider images={PremiereImage} title="Premiere" subtitle="Brand new releases every Friday"
      isDark={true}
      />
      </div>
    </div>
      
      <div className='pt-4'>
        <PosterSlider images={PremiereImage} title="Online Streaming Events"
        isDark={false}
        />
      </div>

      </>
  
  );
}

export default App;


//Spread operator:- 
// syntax example : "const student = {...sachin, goodStu:true};