var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <section className='painting-links'>
						<a className='painting-link__link' href='#'>
							<svg className='painting-links__link__magnify' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
								<use xlinkHref='../svgs/defs.svg#svg-magnify' />
							</svg>
						</a>
						<a className='painting-links__link' href='#'>
							<svg className='painting-links__link__pinterest' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
								<use xlinkHref='../svgs/defs.svg#svg-pinterest' />
							</svg>
						</a>
						<a className='painting-links__link' href='#'>
							<svg className='painting-links__link__etsy' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
								<use xlinkHref='../svgs/defs.svg#svg-etsy' />
							</svg>
						</a>
					</section>

	}
});