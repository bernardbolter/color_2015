var React = require('react');

module.exports = React.createClass({

	render: function() {

	return 	<div className='hero-shade'>
						<svg className='hero-shade__black-box' viewBox='0 0 400 300' preserveAspectRatio='none'>
							<use xlinkHref='../svgs/defs.svg#svg-shade' />
						</svg>
					</div>
	}
});