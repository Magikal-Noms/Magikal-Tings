import React, { Component } from 'react';
import {Navbar} from './components'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Routes />
      <div className='home-div'>
          <button> Tings </button>
      </div>
      </div>
    );
  }
}

export default App;




// import React from 'react'



// const App = () => {
//   return (
//     <div>
//     <Navbar />
//       <div>
     
//       </div>
//       <Routes />
//     </div>
//   )
// }

// export default App
