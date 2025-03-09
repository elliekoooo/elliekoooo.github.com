import './App.css'
import { Provider } from 'react-redux';
import store from './store';
import { OverView } from './layouts/Overview';
import { About } from './layouts/About';
import { Projects } from './layouts/Projects';
import { ScrollSection } from './components/ScrollSection';

function App() {  const sections = [<OverView/>, <About/>, <Projects/>];

  return (
    <Provider store={store}>
        <ScrollSection sections={sections}></ScrollSection>
    </Provider>
  )
}

export default App


