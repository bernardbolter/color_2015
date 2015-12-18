var React = require('react');
var PictureFill = require('picturefill');
var LazySizes = require('lazysizes');

module.exports = React.createClass({

	render: function() {

	return 	<section className='hero-wrap'>
						<div className='hero__image'>
							<div className={'hero__image--background hero__image--background-' + this.props.web_back}></div>
						</div>
						<div className='hero-og-text'>
							<a className='hero-og-text__link' href={this.props.link}>
								<svg className='hero-og-text__link--svg' viewBox='0 0 100 30' preserveAspectRatio='none'>
									<use xlinkHref='../svgs/defs.svg#svg-og-title-back' />
								</svg>
								<h4 className='hero-og-text__link--title'>{this.props.title} . {this.props.year}</h4>
								<h5 className='hero-og-text__link--city'>{this.props.city}</h5>
								<h6 className='hero-og-text__link--wikicommons'>wikipedia commons</h6>
							</a>
						</div>
					</section>
	}
});