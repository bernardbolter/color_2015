var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	render: function() {

	return	<div className='hero-left'>
						<svg style={this.fillHeroLeft()} className='hero-left__left-svg icon' viewBox='0 0 50 500' preserveAspectRatio='none'>
							<use xlinkHref='../svgs/defs.svg#svg-side-left' />
						</svg>
					</div>
	},
	fillHeroLeft: function() {
		var fillHeroLeftColors = [
			'#A41E22', '#F09121', '#E1B424', '#869F66', '#4DA446', '#1DA097', '#3482AD', '#3B5BA9', '#674D8C'
		];
		var randomHeroLeftColor = _.shuffle(fillHeroLeftColors)[0];
		var fillHeroLeftStyle = {
			fill : randomHeroLeftColor
		}; 

		return fillHeroLeftStyle
	}
});