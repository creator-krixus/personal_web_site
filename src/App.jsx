import './App.css';
import Body from './components/body/Body';
import Functions from './components/functions/Functions';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Stack from './components/stack/Stack';

function App() {
  return (
    <div className="App">
      <Header />
      <Stack />
      <Body />
      <Functions />
      <Footer />
    </div>
  );
}

export default App;
