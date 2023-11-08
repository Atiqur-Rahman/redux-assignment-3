import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Page from './components/Page';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <Page />
        </Provider>
    );
}

export default App;
