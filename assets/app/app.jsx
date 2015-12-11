var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var ReactDOM = require('react-dom');
var PictureFill = require('picturefill');
var html5shiv = require('html5shiv');
var gsap = require('gsap');
var lazysizes = require('lazysizes');

var rootUrl = "https://bolter-art.firebaseio.com/";

var PaintingLeft = require('./painting-left');
var PaintingRight = require('./painting-right');
var PaintingInfo = require('./painting-info');
var PaintingImage = require('./painting-image');

var Paintings = React.createClass({
	mixins: [ ReactFire ],
	componentWillMount: function() {
		this.bindAsObject(new Firebase(rootUrl + 'paintings/'), 'paintings');	      
	},
	render: function(){
		console.log(this.state);
		return <section className='painting-loop'>

			<PaintingLeft />

			<div className='painting-container'>

				<PaintingInfo />
				<PaintingImage />

			</div>

			<PaintingRight />
			
		</section>
	}
});

var element = React.createElement(Paintings, {});

ReactDOM.render(element, document.querySelector('#paintings-loop'));