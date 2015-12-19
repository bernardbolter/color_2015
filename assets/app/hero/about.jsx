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
                        <h6 className='about__close' onClick={this.hide}>x</h6>
                        <p>The Colorful History Series appropriates historical photographs from the cities we live in and sets them in a modern context through the use of acrylic paint.</p>
                        <p>Bernard started this series after returning to his home town of San Francisco as a reaction to the rapid change in that city.</p>
                        <p>Origianl Art, about Original Places, by an Original Dude.</p>
                    </div>
                </div>;
    }
});