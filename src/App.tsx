import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { OverView } from './\blayouts/Overview';
import { About } from './\blayouts/About';
import { Projects } from './\blayouts/Projects';
import { Contacts } from './\blayouts/Contacts';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route index path={""}   element={<Navigate to="/overview" replace />}></Route>
        <Route path={"overview"} element={<OverView />}></Route>
        <Route path={"about"}    element={<About />}></Route>
        <Route path={"projects"} element={<Projects />}></Route>
        <Route path={"contacts"} element={<Contacts />}></Route>
      </Routes>
    </Provider>
  )
}

export default App


