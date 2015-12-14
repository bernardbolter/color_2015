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
                    </div>
                </div>;
    }
});