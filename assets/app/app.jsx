var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function(){
		return <div>
		Hello Wolrd!
		</div>
	}
});

var element = React.createElement(HelloWorld);

ReactDOM.render(element, document.querySelector('.react'));