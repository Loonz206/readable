import React from 'react';
import ReactDOM from 'react-dom';
import CreateEditView from './CreateEditView';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateEditView />, div);
});