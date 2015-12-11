var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	render: function() {
		var fillColors = [
				'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
			]
			var randomColor = _.shuffle(fillColors)[0];
			var fillStyle = {
				fill : randomColor
			}; 
		return	<div className='painting-loop__left'>
							<svg style={fillStyle} className='painting-loop__left--svg' viewBox='0 0 50 600' preserveAspectRatio='none'>
								<use xlinkHref='../svgs/defs.svg#svg-side-one' />
							</svg>
						</div>

		function svgFill() {
			var fillColors = [
				'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
			]
			var randomColor = _.shuffle(fillColors)[0];

			return randomColor
		}
	}
});