// import viteLogo from '/vite.svg'
import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';

// const App = () => {
//   return (
//     <>
//       <div>
//         <img src={reactLogo} />
//         <h1>Fun facts about React</h1>
//         <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100K stars on Github</li>
//           <li>Is maintained by Facebook</li>
//           <li>Power thousands of enterprise app, including mobile apps</li>
//         </ul>
//       </div>
//     </>
//   )
// }

const App = () => {
  return (
    <div className='main-container'>
      <div className='card'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
