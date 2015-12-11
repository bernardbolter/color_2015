var React = require('react');

module.exports = React.createClass({
	render: function() {
		return	<div className='painting-loop__right'>
							<svg className='painting-loop__right--svg' viewBox='0 0 50 600' preserveAspectRatio='none'>
								<use xlinkHref='../svgs/defs.svg#svg-side-two' />
							</svg>
						</div>
	}
});