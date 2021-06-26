import style from  './App.module.css';
import { Header , HomePage , About , Skills , Qualification , Services , Portfolio , ProjectInMind , Contact , Footer , ScrollUp } from './components';


function App() {
  return (
    <div className={style.App}>
      <Header  />
      <HomePage  />
      <About  />
      <Skills  />
      <Qualification />
      <Services />
      <Portfolio />
      <ProjectInMind />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
