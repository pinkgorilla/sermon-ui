import React from 'react';

'use strict';

export default class FieldReact extends React.Component {
    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillMount() {
        this.setState({ label: this.props.label || '', error: this.props.error || '', options: this.props.options });
    }

    componentWillReceiveProps(props) {
        this.setState({ label: props.label || '', error: props.error || '', options: props.options });
    }

    render() {
        var options = this.state.options||{};
        var stack =
            <div className="form-group">
                <label htmlFor="name">{this.state.label}</label>
                {this.props.children}
                <span className="help-block">{this.state.error}</span>
            </div>;

        var inline =
            <div className={`form-group ${this.state.error ? 'has-error' : ''}`}>
                <label htmlFor="name" className="col-sm-2 control-label">{this.state.label}</label>
                <div className="col-sm-5">
                    {this.props.children}
                    <span className="help-block">{this.state.error}</span>
                </div>
            </div>;
        var element = !options.inline ? stack : inline;


        return element;
    }
}

