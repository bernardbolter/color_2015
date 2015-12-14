var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

	render: function() {

	return	<section className='hero-right'>
						<div className='hero-right__top'>
							<svg style={this.fillHeroTopRight()} className='hero-right__top--svg icon' viewBox='0 0 50 250' preserveAspectRatio='none'>
								<use xlinkHref='../svgs/defs.svg#svg-side-right-top' />
							</svg>
						</div>
						<div className='hero-right__bottom'>
							<svg style={this.fillHeroBottomRight()} className='hero-right__bottom--svg icon' viewBox='0 0 50 252' preserveAspectRatio='none'>
								<use xlinkHref='../svgs/defs.svg#svg-side-right-bot' />
							</svg>
						</div>
					</section>
	},
	fillHeroTopRight: function() {
		var fillHeroTopRightColors = [
			'#51251e', '#68492a', '#61532d', '#444f3c', '#335233', '#1DA097', '#304654', '#303954', '#e4e3e2'
		];
		var randomHeroTopRightColor = _.shuffle(fillHeroTopRightColors)[0];
		var fillHeroTopRightStyle = {
			fill : randomHeroTopRightColor
		}; 

		return fillHeroTopRightStyle
	},
	fillHeroBottomRight: function() {
		var fillHeroBottomRightColors = [
			'#A41E22', '#F09121', '#E1B424', '#869F66', '#4DA446', '#1DA097', '#3482AD', '#3B5BA9', '#674D8C'
		];
		var randomHeroBottomRightColor = _.shuffle(fillHeroBottomRightColors)[0];
		var fillHeroBottomRightStyle = {
			fill : randomHeroBottomRightColor
		}; 

		return fillHeroBottomRightStyle
	}
});