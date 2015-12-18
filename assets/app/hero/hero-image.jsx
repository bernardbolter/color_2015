var React = require('react');
var PictureFill = require('picturefill');
var LazySizes = require('lazysizes');

module.exports = React.createClass({

	render: function() {

	return 	<section className='hero-wrap'>
						<div className='hero__image'>
							<picture>
								<source
									data-srcset="./img/og/waterfront-1850_og_md.jpg"
									media="(max-width: 800px)" />
								<source
										data-srcset="./img/og/waterfront-1850_og_xl.jpg"
										media="(max-width: 1024px)" />
								<source
										data-srcset="./img/og/waterfront-1850_og_xl.jpg" />
							<img
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
									data-src="./img/og/waterfront-1850_og_xl.jpg"
									className="lazyload"
									alt="image with artdirection" />
							</picture>
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
	},
	backgroundImageRender: function() {
					var dataSize = 'auto'
					var dataSrc = './img/og/' + this.props.web_title + '_og_xs.jpg 280w, ./img/og/' + this.props.web_title + '_og_md.jpg 801w, ./img/og/' + this.props.web_title + '_og_lg.jpg 1201w, ./img/og/' + this.props.web_title + '_og_xl.jpg 1601w';
					var lazyClass = 'lazyload'
					var imageAlt = this.props.title

				return <img data-size={dataSize} data-srcset={dataSrc} className={lazyClass} alt={imageAlt} />
			}
});