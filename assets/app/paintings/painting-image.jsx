var React = require('react');
var PictureFill = require('picturefill');
var LazySizes = require('lazysizes');

module.exports = React.createClass({
	render: function() {

		return <section className='painting-image'>
							{this.paintingImageRender()}
					</section>
				},
				paintingImageRender: function() {
						var dataSize = 'auto'
						var dataSrc = './img/paintings/' + this.props.web_title + '/' + this.props.web_title + 'x400.jpg 280w, ./img/paintings/' + this.props.web_title + '/' + this.props.web_title + 'x800.jpg 801w, ./img/paintings/' + this.props.web_title + '/' + this.props.web_title + 'x1200.jpg 1201w, ./img/paintings/' + this.props.web_title + '/' + this.props.web_title + 'x1600.jpg 1601w';
						var lazyClass = 'lazyload'
						var imageAlt = this.props.title + ' ' + this.props.photo_year

					return <img data-size={dataSize} data-srcset={dataSrc} className={lazyClass} alt={imageAlt} />
				}
});