var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
	render: function() {
		return  <section className='paintings-top'>
							<div className='paintings-top__left'>
								<svg style={this.fillTopLeft()} className='icon' viewBox='0 0 1 1' preserveAspectRatio='none'>
									<use xlinkHref='../svgs/defs.svg#svg-square' />
								</svg>
							</div>
							<div className='paintings-top__angle'>
								<svg className='icon' viewBox='0 0 1000 167' preserveAspectRatio='none'>
									<use xlinkHref='../svgs/defs.svg#svg-angle' />
								</svg>
								<p className='paintings-top__angle--heading'>Paintings</p>
							</div>
							<div className='paintings-top__right'>
								<svg style={this.fillTopRight()} className='icon' viewBox='0 0 1 1' preserveAspectRatio='none'>
									<use xlinkHref='../svgs/defs.svg#svg-square' />
								</svg>
							</div>
						</section>
	},
	fillTopLeft : function() {
		var fillTopLeftColors = [
			'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
		];
		var randomTopLeftColor = _.shuffle(fillTopLeftColors)[0];
		var fillTopLeft = {
			fill : randomTopLeftColor
		}; 

		return fillTopLeft
	},
		fillTopRight : function() {
		var fillTopRightColors = [
			'#d3b7ad', '#e4d0ba', '#e0d6be', '#cdd0c5', '#c6d1bf', '#c2d1cf', '#c1cad4', '#bec0d3', '#c4bdcc'
		];
		var randomTopRightColor = _.shuffle(fillTopRightColors)[0];
		var fillTopRight = {
			fill : randomTopRightColor
		}; 

		return fillTopRight
	}
});