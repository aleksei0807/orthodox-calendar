import React, { Component } from 'react';
import { decode } from './utils/htmlentity';

export default class OrthodoxCalendar extends Component {
	constructor() {
		super();

		this.state = {
			moduleData: {}
		};
	}

	createMarkup(html) {
		return {
			__html: html
		};
	}

	componentDidMount() {
		
	}

    render() {
		const moduleData = this.state.moduleData;

        return (
            <div className="orthodox-calendar">
				{moduleData.day ? <span className="orthodox-calendar__day" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.day))} /> : null}
				{moduleData.ned ? <span className="orthodox-calendar__ned" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.ned))} /> : null}
				{moduleData.trapeza_txt ? <span className="calendar__trapeza-txt" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.trapeza_txt))} /> : null}
				<div>
					{moduleData.para ? <div className="orthodox-calendar__para" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.para))} /> : null}
					{moduleData.chten ? <div className="orthodox-calendar__chten" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.chten))} /> : null}
				</div>
			</div>
        );
    }
}
