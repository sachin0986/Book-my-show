//Higher Order Components 
import React from 'react';

import { Route, Routes } from 'react-router-dom'
//Layouts
import MovieLayout from '../Layouts/MovieLayout';

const MovieHOC = ({ component: Component , ...rest }) => { //we change the ...props in to ...rest for compiler understanding
    //element = component
    //props -> path, exact[optional]
  return (
    <Routes>
    
    <Route {...rest}
    Component = {(props) => (
        <MovieLayout>
          <Component {...props} />  
        </MovieLayout>
    )

    }
    />
    
    </Routes>
  )
  
}

export default MovieHOC;