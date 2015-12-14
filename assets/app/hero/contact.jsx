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
                        <h1>Contact</h1>
                    </div>
                </div>;
    }
});