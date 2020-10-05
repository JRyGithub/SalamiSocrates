import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <section>
        {images.map(i => <img src={i} alt="" />)}
      </section>
    </div>
  );
}

export default App;
