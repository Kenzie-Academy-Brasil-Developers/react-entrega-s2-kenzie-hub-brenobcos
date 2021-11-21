import { Global } from "./styles/global";
import Routes from "./Routes";
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <div className="App">
      <Global />
      <Routes />
      <Toaster position = "top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
