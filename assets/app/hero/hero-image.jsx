var React = require('react');
var PictureFill = require('picturefill');

module.exports = React.createClass({

	render: function() {

	return 	<section className='hero-wrap'>
						<div className="hero__image">
						</div>
						<div className='hero-og-text'>
							<a className='hero-og-text__link' href='https://commons.wikimedia.org/wiki/File:%22Cliff_House_and_Seal_Rocks.%22_-_NARA_-_520071.jpg'>
								<svg className='hero-og-text__link--svg' viewBox='0 0 100 30' preserveAspectRatio='none'>
									<use xlinkHref='../svgs/defs.svg#svg-og-title-back' />
								</svg>
								<h4 className='hero-og-text__link--title'>CLIFF HOUSE.1902</h4>
								<h5 className='hero-og-text__link--city'>San Francisco</h5>
								<h6 className='hero-og-text__link--wikicommons'>wikipedia commons</h6>
							</a>
						</div>
					</section>
	}
});