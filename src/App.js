import './App.css';
import './styles/div.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRoutes from './routes/UserRoutes';
import SiteNavbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <SiteNavbar/>
      <UserRoutes/>
    </div>
  );
}

export default App;
