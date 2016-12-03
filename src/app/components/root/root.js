import React from 'react';
import NavBar from '../nav-bar';
import Header from '../header';
export default class Root extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <NavBar/> 
      </div>
    );
  }
}
