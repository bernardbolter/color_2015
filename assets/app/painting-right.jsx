var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	render: function() {
			var fillRightColors = [
				'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
			];
			var randomRightColor = _.shuffle(fillRightColors)[0];
			var fillRightStyle = {
				fill : randomRightColor
			}; 
	return	<div className='painting-loop__right'>
						<svg style={fillRightStyle} className='painting-loop__right--svg' viewBox='0 0 50 600' preserveAspectRatio='none'>
							<use xlinkHref='../svgs/defs.svg#svg-side-two' />
						</svg>
					</div>
	}
});