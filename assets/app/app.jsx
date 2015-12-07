var React = require('react');
var ReactDOM = require('react-dom');
var PictureFill = require('picturefill');
var html5shiv = require('html5shiv');

var HelloWorld = React.createClass({
	render: function(){
		return <div>
		Hello World!
		</div>
	}
});

var element = React.createElement(HelloWorld);

ReactDOM.render(element, document.querySelector('.react'));