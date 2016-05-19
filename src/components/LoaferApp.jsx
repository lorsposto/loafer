import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import LoafList from './LoafList';

export class LoaferApp extends React.Component {
    render() {
        return <div>
            <section className="loaferapp">
                <LoafList {...this.props} />
            </section>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        loaves: state.get('loaves'),
        filter: state.get('filter')
    };
}

const LoaferAppContainer = connect(mapStateToProps, actionCreators)(LoaferApp);
export default LoaferAppContainer;