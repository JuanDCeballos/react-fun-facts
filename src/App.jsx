// import viteLogo from '/vite.svg'
import './App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='main-container'>
      <div className='card'>
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
