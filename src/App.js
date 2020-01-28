import React from 'react';
import Header from './components/Header'
import Headline from './components/Headline'
import './App.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 28,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts!' tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
