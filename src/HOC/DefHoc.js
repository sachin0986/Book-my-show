//Higher Order Components 
import React from 'react';

import { Route, Routes } from 'react-router-dom'
//Layouts
import DefLayout from '../Layouts/DefLayout'

const DefHoc = ({ component: Component , ...rest }) => { //we change the ...props in to ...rest for compiler understanding
    //element = component
    //props -> path, exact[optional]
  return (
    <Routes>
    
    <Route {...rest}
    Component = {(props) => (
        <DefLayout>
          <Component {...props} />  
        </DefLayout>
    )

    }
    />
    
    </Routes>
  )
  
}

export default DefHoc;

// What a component do.? it basicall pass what properties you give to ui(user interface);
//What are HOC:-Higher Other Component,? it basiclly transforms the all of our component or the certain part of our component into some other component
// this is basiclly for adding extra functionalities to the exesting component.