'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _htmlentity = require('./utils/htmlentity');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrthodoxCalendar = function (_Component) {
	_inherits(OrthodoxCalendar, _Component);

	function OrthodoxCalendar() {
		_classCallCheck(this, OrthodoxCalendar);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OrthodoxCalendar).call(this));

		_this.state = {
			moduleData: {}
		};
		return _this;
	}

	_createClass(OrthodoxCalendar, [{
		key: 'createMarkup',
		value: function createMarkup(html) {
			return {
				__html: html
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var moduleData = this.state.moduleData;

			return _react2.default.createElement(
				'div',
				{ className: 'orthodox-calendar' },
				moduleData.day ? _react2.default.createElement('span', { className: 'orthodox-calendar__day', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.day)) }) : null,
				moduleData.ned ? _react2.default.createElement('span', { className: 'orthodox-calendar__ned', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.ned)) }) : null,
				moduleData.trapeza_txt ? _react2.default.createElement('span', { className: 'calendar__trapeza-txt', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.trapeza_txt)) }) : null,
				_react2.default.createElement(
					'div',
					null,
					moduleData.para ? _react2.default.createElement('div', { className: 'orthodox-calendar__para', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.para)) }) : null,
					moduleData.chten ? _react2.default.createElement('div', { className: 'orthodox-calendar__chten', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.chten)) }) : null
				)
			);
		}
	}]);

	return OrthodoxCalendar;
}(_react.Component);

exports.default = OrthodoxCalendar;