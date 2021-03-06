var React = require('react');
var PaintingLeft = require('./painting-left');
var PaintingRight = require('./painting-right');
var PaintingImage = require('./painting-image');

module.exports = React.createClass({
	render: function() {

		return <div className='painting-loop__background' style={this.greyBack()}>
						<PaintingLeft {...this.props} />

							<div className='painting-container'>

								<div className={this.leftRight()}>

									<section className={this.displayRight()}>
										<h2 className='painting-text__title'>{this.props.title} . {this.props.photo_year}</h2>
										<h3 className='painting-text__city'>{this.props.city}</h3>
										<h4 className='painting-text__info'>{this.props.dimensions} | {this.props.created}</h4>
										<p className={'painting-text__story ' + this.floatRight()}>{this.props.story}</p>
									</section>

								</div>
								<PaintingImage {...this.props} />

							</div>

						<PaintingRight {...this.props} />
					</div>
	},
	greyBack: function() {
		var count = this.props.reactKey + 1;
		if (count%2 === 0) {
			backColor = { background: '#dCdCdB'};
		} else {
			backColor = { background: '#e4e2e2' };
		}

		return backColor
	},
	leftRight: function() {
		var count = this.props.reactKey + 1;
		if (count%2 === 0) {
			leftRight = 'painting-info-container__right';
		} else {
			leftRight = 'painting-info-container__left';
		}
	return leftRight
	},
	displayRight: function() {
		var count2 = this.props.reactKey + 1;
		if (count2%2 === 0) {
			isRight = 'painting-text__right';
		} else {
			isRight = 'painting-text';
		}
	return isRight
	},
	floatRight: function() {
		var count3 = this.props.reactKey + 1;
		if (count3%2 === 0) {
			floatRight = 'painting-text__story--right';
		} else {
			floatRight = '';
		}
	return floatRight
	}
});