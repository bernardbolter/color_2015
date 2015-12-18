var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
	render: function() {
		return 	<section className='paintings-footer'>
							<div className='paintings-footer__text'>
								<svg style={this.fillBottom()} className='icon' viewBox='0 0 1000 167' preserveAspectRatio='none'>
									<use xlinkHref='../svgs/defs.svg#svg-angle' />
								</svg>
								<p className='paintings-footer__text--title'>
									A Colorful History
								</p>
								<p className='paintings-footer__text--name'>
									Bernard John Bolter IV
								</p>
								<p className='paintings-footer__text--copyright'>
									all rights reserved &copy; 2013 - 2016
								</p>
							</div>
						</section>
	},
	fillBottom : function() {
		var fillBottomColors = [
			'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
		];
		var randomBottomColor = _.shuffle(fillBottomColors)[0];
		var fillBottom = {
			fill : randomBottomColor
		}; 

		return fillBottom
	},
});