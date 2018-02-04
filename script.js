var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {
                onClick: this.increment
            }, 'Dodawanie ' + this.state.counter),
            React.createElement('span', {
                onClick: this.decrement
            }, 'Odejmowanie ' + this.state.counter),
            React.createElement('span', {
                onClick: this.multiply
            }, 'Mnozenie ' + this.state.counter)

        )
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);
ReactDOM.render(element, document.getElementById('app'));