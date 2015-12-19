var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            visible: false  
        };
    },

    show: function() {
        this.setState({ visible: true });
        document.addEventListener("click", this.hide);
    },

    hide: function() {
        document.removeEventListener("click", this.hide);
        this.setState({ visible: false });
    },

    render: function() {
        return  <div className="contact">
                    <div className={(this.state.visible ? "visible " : "") + this.props.alignment + ' contact-container'}>
                        <h6 className='contact__close' onClick={this.hide}>x</h6>
                        <h1>Bernard John Bolter IV</h1>
                        <h2>bernard@acolorfulhistory.com</h2>
                        <h2>001 415 490 7702</h2>
                        <a className='contact__link' href='https://www.pinterest.com/colorhistory/'>
                            <svg className='contact__link--pinterest' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
                                <use xlinkHref='../svgs/defs.svg#svg-pinterest' />
                            </svg>
                        </a>
                        <a className='contact__link' href='https://www.etsy.com/shop/pullupgallery'>
                            <svg className='contact__link--etsy' viewBox='0 0 40 40' preserveAspectRatio='xMinYMin meet'>
                                <use xlinkHref='../svgs/defs.svg#svg-etsy' />
                            </svg>
                        </a>
                    </div>
                </div>;
    }
});