import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel.jsx';

ReactDOM.render(
    <Panel panelstyle={'info'} paneltitle={'ingredients'}/>,
    document.getElementById('panelInfo')
);
ReactDOM.render(
    <Panel panelstyle={'success'} paneltitle={'menu'}/>,
    document.getElementById('panelSuccess')
);
ReactDOM.render(
    <Panel panelstyle={'danger'} paneltitle={'to-do'}/>,
    document.getElementById('panelDanger')
);