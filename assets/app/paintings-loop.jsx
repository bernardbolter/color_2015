var React = require('react');
var PaintingsView = require('./painting-view')

module.exports = React.createClass({
	render: function() {
		console.log(this.props);
		return <div>
			{this.renderPaintings()}
		</div>

	},
	renderPaintings: function() {
		var children = [];

		for(var key in this.props.paintings) {
			children.push(
				<li>
					{this.props.paintings[key].title}
				</li>
			)
		}

		return children;
	}
});