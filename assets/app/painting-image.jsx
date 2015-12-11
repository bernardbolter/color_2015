var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log(this.props.reactKey)

		return <section className='painting-image'>
							{this.paintingImageRender()}
					</section>
				},
				paintingImageRender: function() {
						var link = './img/paintings/' + this.props.web_title + '/' + this.props.web_title + 'x1200.jpg';
					return <img src={link} />
				}
});