import { Global } from "./styles/global";
import ButtonPurple from "./components/ButtonPurple";
import Header from "./components/Header";
import Title from "./components/Title";


function App() {
  return (
    <div className="App">
      <Global />
      <ButtonPurple>teste</ButtonPurple>
      <Header />
      <Title />
    </div>
  );
}

export default App;
