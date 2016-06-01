import React from 'react';
import ReactDOM from 'react-dom';
import OrthodoxCalendar from '../../lib/index';

ReactDOM.render(
	<OrthodoxCalendar dayicon={true} trapeza_img={true} server="https://orthodox-calendar.herokuapp.com/" />,
	document.getElementById('root')
);
