import Layout from './components/layout';
import './public/css/global.css';
import Dashboard from './components/dashboard';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <div className="App">
        <Layout />
        <div style={{
          marginLeft: 70
        }}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
