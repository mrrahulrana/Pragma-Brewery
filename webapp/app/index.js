import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { Provider } from 'unstated';
import DevTools from './components/DevTools/DevTools';
import RefrigeratorsList from './components/RefrigeratorsList/RefrigeratorsList';


class App extends React.Component{
    render(){
        return(
            <Provider>
                <RefrigeratorsList />
                <DevTools />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))