import React from 'react';
import ReactDOM from 'react-dom';
import CategoryView from './CategoryView';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryView />, div);
});