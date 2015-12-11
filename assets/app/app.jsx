var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var ReactDOM = require('react-dom');
var PictureFill = require('picturefill');
var html5shiv = require('html5shiv');
var gsap = require('gsap');
var lazysizes = require('lazysizes');

var rootUrl = "https://bolter-art.firebaseio.com/";

var LoopLeft = require('./loop-left');
var LoopRight = require('./loop-right');

var Paintings = React.createClass({
	mixins: [ ReactFire ],
	componentWillMount: function() {
		this.bindAsObject(new Firebase(rootUrl + 'paintings/'), 'paintings');	      
	},
	render: function(){
		console.log(this.state);
		return <section className='paintings-loop'>

			<LoopLeft />

			<div className='paintings-container'>

				<div className='paintings-info-container'>

					<section className='paintings-text'>
						<h2 className='paintings-text__title'>Cliff House . 1902</h2>
						<h3 className='paintings-text__city'>San Francisco</h3>
						<h4 className='paintings-text__info'>16 x 16 | 2015</h4>
						<p className='paintings-text__story'>In 1896, Adolph Sutro built a new Cliff House, a seven story Victorian Chateau, called by some the Gingerbread Palace.  This version Cliff House survived the 1906 earthquake with little damage, but burned to the ground on the evening of September 7, 1907.</p>
					</section>

					<section className='paintings-links'>
						<a className='paintings-links__link' href='#'>
							<svg className='paintings-links__link__magnify' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
								<use xlinkHref='../svgs/defs.svg#svg-magnify' />
							</svg>
						</a>
						<a className='paintings-links__link' href='#'>
							<svg className='paintings-links__link__pinterest' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
								<use xlinkHref='../svgs/defs.svg#svg-pinterest' />
							</svg>
						</a>
						<a className='paintings-links__link' href='#'>
							<svg className='paintings-links__link__etsy' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
								<use xlinkHref='../svgs/defs.svg#svg-etsy' />
							</svg>
						</a>
					</section>

				</div>

			
				<section className='paintings-image'>
					<img data-size='auto' 
							 data-src='./img/paintings/019-cliff-house-1902/019-cliff-house-1902x400.jpg'
							 data-srcset='./img/paintings/019-cliff-house-1902/019-cliff-house-1902x800.jpg 801w,
							 							./img/paintings/019-cliff-house-1902/019-cliff-house-1902x1200.jpg 1201w,
							 							./img/paintings/019-cliff-house-1902/019-cliff-house-1902x1600.jpg 1601w'	
							 className='lazyload'
							 alt='Cliff House 1902' />
				</section>
			</div>

			<LoopRight />
			
		</section>
	}
});

var element = React.createElement(Paintings, {});

ReactDOM.render(element, document.querySelector('#paintings-loop'));