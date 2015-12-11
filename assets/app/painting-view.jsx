var React = require('react');
var PaintingLeft = require('./painting-left');
var PaintingRight = require('./painting-right');
var PaintingInfo = require('./painting-info');
var PaintingImage = require('./painting-image');

module.exports = React.createClass({
	render: function() {
		console.log(this.props.reactKey)
		return <div className='painting-loop__background'>
						<PaintingLeft />

							<div className='painting-container'>

								<div className='painting-info-container'>

									<section className='painting-text'>
										<h2 className='painting-text__title'>{this.props.title} . {this.props.photo_year}</h2>
										<h3 className='painting-text__city'>San Francisco</h3>
										<h4 className='painting-text__info'>{this.props.dimensions} | {this.props.created}</h4>
										<p className='painting-text__story'>{this.props.story}</p>
									</section>

								</div>
								<PaintingImage {...this.props} />

							</div>

						<PaintingRight />
					</div>
	}
});