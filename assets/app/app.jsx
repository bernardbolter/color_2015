var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var ReactDOM = require('react-dom');
var PictureFill = require('picturefill');
var html5shiv = require('html5shiv');
var gsap = require('gsap');
var lazysizes = require('lazysizes');

var rootUrl = "https://bolter-art.firebaseio.com/";

var PaintingView = require('./painting-view');

var Paintings = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
	    return {
	        paintings : []
	    }
	},
	componentWillMount: function() {
		this.bindAsArray(new Firebase(rootUrl + 'paintings/'), 'paintings')      
	},
	render: function() {
		console.log(this.state);
		return (
				<section className='painting-loop'>
					{this.state.paintings.map(function(painting, i) {
							return <PaintingView key={i} reactKey={i} {...painting} />
					})}
				</section>
			);
	},
	onChange: function(event, paintings) {
		this.setState({paintings: paintings})
	}
});

var element = React.createElement(Paintings, {});

ReactDOM.render(element, document.querySelector('#paintings-loop'));