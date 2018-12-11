import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fetchBuilderContent, createQuery } from './utils';

ReactDOM.render(<App fetchBuilderContent={fetchBuilderContent} createQuery={createQuery} />, document.getElementById('root'));
