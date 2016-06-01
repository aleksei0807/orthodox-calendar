import React, { Component } from 'react';
import { decode } from './utils/htmlentity';
import fetch from 'isomorphic-fetch';

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
		let url = 'http://localhost:3333';

		fetch(url)
			.then(response => response.json())
			.then(moduleData => {
				this.setState({
					moduleData
				});
			})
			.catch(err => {
				console.error(err);
			});
	}

    render() {
		const moduleData = this.state.moduleData;

		const {
			day = true,
			dayicon = false,
			ned = true,
			trapeza_txt = true,
			trapeza_img = false,
			para = true,
			chten = true
		} = this.props;

        return (
            <div className="orthodox-calendar">
				{(moduleData.dayicon && dayicon) ? <span className="orthodox-calendar__dayicon" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.dayicon))} /> : null}

				{(moduleData.day && day) ? <span className="orthodox-calendar__day" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.day))} /> : null}

				{(moduleData.ned && ned) ? <span className="orthodox-calendar__ned" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.ned))} /> : null}

				{(moduleData.trapeza_img && trapeza_img) ? <span className="calendar__trapeza_img" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.trapeza_img))} /> : null}

				{(moduleData.trapeza_txt && trapeza_txt) ? <span className="calendar__trapeza-txt" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.trapeza_txt))} /> : null}

				<div>
					{(moduleData.para && para) ? <div className="orthodox-calendar__para" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.para))} /> : null}

					{(moduleData.chten && chten) ? <div className="orthodox-calendar__chten" dangerouslySetInnerHTML={this.createMarkup(decode(moduleData.chten))} /> : null}
				</div>

			</div>
        );
    }
}
