import './App.css';
import Head from './components/head/head';
import Content from './components/Content/content';

function App() {
  return (
    <div className="App" >
      <Head/>
      <Content data-aos="zoom-out-down"/>
    </div>
  );
}

export default App;
