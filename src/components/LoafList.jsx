import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LoafItem from './LoafItem';

export default class LoafList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getItems() {
        if (this.props.loaves) {
            return this.props.loaves.filter(
                (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
            );
        }
        return [];
    }

    render() {
        return <section className="main">
            <ul className="loaf-list">
                {this.getItems().map(item =>
                    <LoafItem key={item.get('title')}
                              id={item.get('id')}
                              title={item.get('title')}
                              date={item.get('date')}
                              isOpen={item.get('open')}
                              toggleOpen={this.props.toggleOpen} />
                )}
            </ul>
        </section>;
    }
}