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
        return  <div className="about">
                    <div className={(this.state.visible ? "visible " : "") + this.props.alignment + ' about-container'}>
                        <h1>About</h1>
                    </div>
                </div>;
    }
});