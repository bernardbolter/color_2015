var React = require('react');

module.exports = React.createClass({

	render: function() {

	return  <section className='hero-nav'>
					 <ul className='hero-nav__navigation'>
					 	<li className='hero-nav__navigation--about'>about</li>
					 	<li className='hero-nav__navigation--contact'>contact</li>
					 	<li className='hero-nav__navigation--paintings'>paintings</li>
					 </ul>
					</section>	
	
	}
});