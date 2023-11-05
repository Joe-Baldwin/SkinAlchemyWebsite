import logo from './img/logo.png';
import './App.css';

import About from './components/AboutMe';
import Welcome from './components/Welcome';
import Header from './components/Navbar';
import Products from './components/Products';
import Appointments from './components/Appointments';
import Services from './components/Services';

function App() {
  return (
  <>
    <div >
      <Welcome />
      <About />
    </div>
  </>
  );
}

// Export the App component so that it can be used in other parts of your application
export default App;
