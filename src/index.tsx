import ReactDOM from 'react-dom';
import { AppRouter } from './router/AppRouter';
import './index.css';

import { store } from './store/index';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
);

