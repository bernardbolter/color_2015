var React = require('react');
var About = require('./about');
var Contact = require('./contact');

module.exports = React.createClass({
	showAbout: function() {
      this.refs.left.show();
  },
  showContact: function() {
      this.refs.right.show();
  },
	render: function() {

	return  <section className='hero-nav'>
					 <ul className='hero-nav__navigation'>
					 	<li className='hero-nav__navigation--about' onClick={this.showAbout}>about</li>
					 	<li className='hero-nav__navigation--contact' onClick={this.showContact}>contact</li>
					 </ul>
		
					<About ref='left' alignment='left' />
					<Contact ref='right' alignment='right' />

					</section>
	}
});