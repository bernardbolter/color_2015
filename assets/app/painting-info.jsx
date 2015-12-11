var React = require('react');

module.exports = React.createClass({
	render: function() {
		return 	<div className='painting-info-container'>

							<section className='painting-text'>
								<h2 className='painting-text__title'>Cliff House . 1902</h2>
								<h3 className='painting-text__city'>San Francisco</h3>
								<h4 className='painting-text__info'>16 x 16 | 2015</h4>
								<p className='painting-text__story'>In 1896, Adolph Sutro built a new Cliff House, a seven story Victorian Chateau, called by some the Gingerbread Palace.  This version Cliff House survived the 1906 earthquake with little damage, but burned to the ground on the evening of September 7, 1907.</p>
							</section>

						</div>
		}
});