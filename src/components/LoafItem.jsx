import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default class LoafItem extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {

        var itemClass = classNames({
            'loaf': true,
            'open': this.props.isOpen
        });

        return <li className={itemClass}
            onClick={() => this.props.toggleOpen(this.props.id)}>
            <div className="view">
                <label htmlFor="loaf">
                    {this.props.title}
                    <span className="loaf-item-date">{this.props.date}</span>
                </label>
                <button className="open-detail">
                </button>
            </div>
        </li>;
    }
}