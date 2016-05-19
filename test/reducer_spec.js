import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from  '../src/reducer';

describe ('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                loaves: List.of(
                    Map({id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false}),
                    Map({id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true})
                )
            })
        };

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true}
            ]
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                loaves: [
                    {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                    {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true}
                ]
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true}
            ]
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                loaves: [
                    {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                    {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true}
                ]
            }
        };
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true}
            ]
        }));
    });

    it('handles TOGGLE_OPEN by changing the open from false to true', () => {
        const initialState = fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: false}
            ]
        });
        const action = {
            type: 'TOGGLE_OPEN',
            itemId: 1
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: true},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: false}
            ]
        }));
    });

    it('handles TOGGLE_OPEN by changing the open from true to false', () => {
        const initialState = fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: true}
            ]
        });
        const action = {
            type: 'TOGGLE_OPEN',
            itemId: 2
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            loaves: [
                {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
                {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: false}
            ]
        }));
    });
});