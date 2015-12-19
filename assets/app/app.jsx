var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var ReactDOM = require('react-dom');
var PictureFill = require('picturefill');
var html5shiv = require('html5shiv');
var lazysizes = require('lazysizes');
var _ = require('lodash');

var rootUrl = "https://bolter-art.firebaseio.com/";

var PaintingView = require('./paintings/painting-view');
var PaintingsTop = require('./paintings/paintings-top');
var PaintingsFooter = require('./paintings/paintings-footer');

var HeroLeft = require('./hero/hero-left');
var HeroImage = require('./hero/hero-image');
var HeroTitle = require('./hero/hero-title');
var HeroShade = require('./hero/hero-shade');
var HeroText = require('./hero/hero-text');
var HeroNav = require('./hero/hero-nav');
var HeroRight = require('./hero/hero-right');

var Hero = React.createClass({
	mixins: [ReactFire],
	getInitialState: function() {
		return {
			ogphotos : []
		}
	},
	componentWillMount: function() {
		this.bindAsArray(new Firebase(rootUrl + 'ogphotos/'), 'ogphotos')
	},
	render: function(){
		console.log(this.state.ogphotos);
		var randomBackground = _.sample(this.state.ogphotos);
		console.log(randomBackground);

		return (
				<section className='hero'>
					<HeroLeft />
					<section className ='hero-image_wrap'>
							<HeroImage {...randomBackground}/>
					</section>
					<HeroTitle />
					<HeroShade />
					<HeroText />
					<HeroNav />
					<HeroRight />
				</section>
			);
	},
	onChange: function(event, ogphotos) {
		this.setState({ogphotos: ogphotos})
	}
});

var Paintings = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
	    return {
	        paintings : []
	    }
	},
	componentWillMount: function() {
		this.bindAsArray(new Firebase(rootUrl + 'paintings/'), 'paintings');
	},
	render: function() {
		var paintingsShuffled = _.shuffle(this.state.paintings);

		return (
				<section className='paintings'>
					<PaintingsTop />
					<section className='painting-loop'>
						{paintingsShuffled.map(function(painting, i) {
								return <PaintingView key={i} reactKey={i} {...painting} />
						})}
					</section>
					<PaintingsFooter />
				</section>
			);
	},
	onChange: function(event, paintings) {
		this.setState({paintings: paintings})
	}
});

var heroWrap = React.createElement(Hero, {});

ReactDOM.render(heroWrap, document.querySelector('#hero'));

var paintingsLoop = React.createElement(Paintings, {});

ReactDOM.render(paintingsLoop, document.querySelector('#paintings'));