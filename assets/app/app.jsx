var React = require('react');

var HelloWorld = React.createClass({
	render: function(){
		return <div>
		Hello Wolrd!
		</div>
	}
});

var element = React.createElement(HelloWorld);

React.render(element, document.querySelector('.container'));