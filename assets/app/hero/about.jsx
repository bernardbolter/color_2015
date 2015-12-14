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
                        <p>My inspiration for the Colorful History series came to me after I moved back to my home town of San Francisco after living abroad for some years. While living in New York City, around 2004, I created a number of paintings that I called the Vanishing Landscape series. These paintings used the same painting and photo transfer technique of the Colorful History series, but with my own photographs.</p>
                        <p>In 2010, I found myself back in San Francisco, which had changed a lot and seemed to be changing even faster these days, with the influx of tech companies and transplants moving there. For the last years before I moved back, I had been traveling the world a lot and working on a series of composite city photographs, called the Digital City Series. I felt that wanted to get back into painting and was looking for a way to create some new work that remembered the past, but also had a modern context to put everything into perspective. I found an old book of mine that had a bunch of historical photos of the city in it and was inspired to make this new series.</p>
                    </div>
                </div>;
    }
});