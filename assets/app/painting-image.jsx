var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <section className='painting-image'>
							<img data-size='auto' 
									 data-src='./img/paintings/019-cliff-house-1902/019-cliff-house-1902x400.jpg'
									 data-srcset='./img/paintings/019-cliff-house-1902/019-cliff-house-1902x800.jpg 801w,
									 							./img/paintings/019-cliff-house-1902/019-cliff-house-1902x1200.jpg 1201w,
									 							./img/paintings/019-cliff-house-1902/019-cliff-house-1902x1600.jpg 1601w'	
									 className='lazyload'
									 alt='Cliff House 1902' />
						</section>

		}
});