var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	render: function() {

	return	<div className='painting-loop__left'>
						<svg style={this.fillLeftStyle()} className='painting-loop__left--svg' viewBox='0 0 50 600' preserveAspectRatio='none'>
							<use xlinkHref='../svgs/defs.svg#svg-side-one' />
						</svg>
					</div>
	},
	fillLeftStyle: function() {
		var fillLeftColors = [
			'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
		];
		var randomLeftColor = _.shuffle(fillLeftColors)[0];
		var fillLeftStyle = {
			fill : randomLeftColor
		}; 

		return fillLeftStyle
	}
});