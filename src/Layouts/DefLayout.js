import React from 'react'
import Navbar from '../components/Navbar/NavbarComp';


const DefLayout = (props) => {
  return (
    //props.children calls the child component
    <>
    <Navbar/>
    {this.props.children}
    </>
  );
};

export default DefLayout;