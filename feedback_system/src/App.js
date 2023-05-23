import logo from './logo.svg';
import './App.css';
import { Login } from './pages/loginpage';
import { Forms } from './pages/formpage';
import FeedbackForm from './pages/feedback';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Forms/> */}
      <FeedbackForm/>
    </div>
  );
}

export default App;
