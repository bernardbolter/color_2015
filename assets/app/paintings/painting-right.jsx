var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	render: function() {
			
	return	<div className='painting-loop__right'>
						<svg style={this.fillRightStyle()} className='painting-loop__right--svg icon' viewBox='0 0 50 600' preserveAspectRatio='none'>
							<use xlinkHref={this.pickRightSvg()} />
						</svg>
					</div>
	},
	fillRightStyle: function() {
		var fillRightColors = [
			'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
		];
		var randomRightColor = _.shuffle(fillRightColors)[0];
		var fillRightStyle = {
			fill : randomRightColor
		}; 

		return fillRightStyle
	},
	pickRightSvg: function() {
		var countRight = this.props.reactKey + 1;
		if (countRight%2 === 0) {
			pickRight = '../svgs/defs.svg#svg-side-four';
		} else {
			pickRight = '../svgs/defs.svg#svg-side-two';
		}

		return pickRight
	}
});