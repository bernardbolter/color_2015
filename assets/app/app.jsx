var React = require('react');
var ReactDOM = require('react-dom');
var PictureFill = require('picturefill');
var html5shiv = require('html5shiv');
var gsap = require('gsap');

var HelloWorld = React.createClass({
	render: function(){
		return <div>
		<p className='paintings__title'>Cliff House 1902</p>
		</div>
	}
});

var element = React.createElement(HelloWorld);

ReactDOM.render(element, document.querySelector('.react'));