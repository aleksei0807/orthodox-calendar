import React from 'react';
import ReactDOM from 'react-dom';
import OrthodoxCalendar from '../../lib/index';

ReactDOM.render(
	<OrthodoxCalendar server="https://orthodox-calendar.herokuapp.com/" />,
	document.getElementById('root')
);
