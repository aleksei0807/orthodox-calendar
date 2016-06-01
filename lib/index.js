'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _htmlentity = require('./utils/htmlentity');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

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
			moduleData: null
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
		value: function componentDidMount() {
			var _this2 = this;

			var url = 'http://localhost:3333';

			(0, _isomorphicFetch2.default)(url).then(function (response) {
				return response.json();
			}).then(function (moduleData) {
				_this2.setState({
					moduleData: moduleData
				});
			}).catch(function (err) {
				console.error(err);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var moduleData = this.state.moduleData || {};

			var _props = this.props;
			var _props$day = _props.day;
			var day = _props$day === undefined ? true : _props$day;
			var _props$dayicon = _props.dayicon;
			var dayicon = _props$dayicon === undefined ? false : _props$dayicon;
			var _props$ned = _props.ned;
			var ned = _props$ned === undefined ? true : _props$ned;
			var _props$trapeza_txt = _props.trapeza_txt;
			var trapeza_txt = _props$trapeza_txt === undefined ? true : _props$trapeza_txt;
			var _props$trapeza_img = _props.trapeza_img;
			var trapeza_img = _props$trapeza_img === undefined ? false : _props$trapeza_img;
			var _props$para = _props.para;
			var para = _props$para === undefined ? true : _props$para;
			var _props$chten = _props.chten;
			var chten = _props$chten === undefined ? true : _props$chten;
			var _props$loading = _props.loading;
			var loading = _props$loading === undefined ? "Загрузка..." : _props$loading;


			return _react2.default.createElement(
				'div',
				{ className: 'orthodox-calendar' },
				this.state.moduleData === null ? _react2.default.createElement(
					'div',
					{ className: 'orthodox-calendar__loading' },
					loading
				) : null,
				moduleData.day && day ? _react2.default.createElement('span', { className: 'orthodox-calendar__day', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.day)) }) : null,
				moduleData.ned && ned ? _react2.default.createElement('span', { className: 'orthodox-calendar__ned', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.ned)) }) : null,
				_react2.default.createElement(
					'div',
					{ className: 'orthodox-calendar__trapeza' },
					moduleData.trapeza_img && trapeza_img ? _react2.default.createElement('div', { className: 'orthodox-calendar__trapeza-img', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.trapeza_img)) }) : null,
					moduleData.trapeza_txt && trapeza_txt ? _react2.default.createElement('span', { className: 'orthodox-calendar__trapeza-txt', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.trapeza_txt)) }) : null
				),
				_react2.default.createElement('div', { className: 'clear' }),
				_react2.default.createElement(
					'div',
					null,
					moduleData.dayicon && dayicon ? _react2.default.createElement('div', { className: 'orthodox-calendar__dayicon', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.dayicon)) }) : null,
					moduleData.para && para ? _react2.default.createElement('div', { className: 'orthodox-calendar__para', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.para)) }) : null,
					moduleData.chten && chten ? _react2.default.createElement('div', { className: 'orthodox-calendar__chten', dangerouslySetInnerHTML: this.createMarkup((0, _htmlentity.decode)(moduleData.chten)) }) : null
				)
			);
		}
	}]);

	return OrthodoxCalendar;
}(_react.Component);

exports.default = OrthodoxCalendar;