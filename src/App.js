import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/footer/footer";
import {Form} from "./components/form/form";
function App() {
  return (
    <div className="App">
      <div style={{paddingLeft : "100px"}}>
      <Header />
      <Form />
     <Footer />
      </div> 
    </div>
  );
}

export default App;
