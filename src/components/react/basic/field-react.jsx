import React from 'react'; 

'use strict';

export default class FieldReact extends React.Component {
    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillMount() {
        this.setState({ label: this.props.label || '', error: this.props.error || '' });
    }

    componentWillReceiveProps(props) {
        this.setState({ label: props.label || '', error: props.error || '' });
    }

    render() {
        return (
            <div className={`form-group ${this.state.error ? 'has-error' : ''}`}>
                <label htmlFor="name" className="col-sm-2 control-label">{this.state.label}</label>
                <div className="col-sm-5">
                    {this.props.children}
                    <span className="help-block">{this.state.error}</span>
                </div>
            </div>
        );
    }
}

