import React from 'react';
import TestUtils from 'react-addons-test-utils';
import LoafList from '../../src/components/LoafList';
import {expect} from 'chai';
import {List, Map} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = TestUtils;

describe('LoafList', () => {
   it ('renders a list with only active items if the filter is active', () => {
       const loaves = List.of(
           Map({id: 1, title: 'Country White', status: 'active'}),
           Map({id: 2, title: 'Country Brown', status: 'inactive'})
       );
       const filter = 'active';
       const component = renderIntoDocument(<LoafList filter={filter} loaves={loaves} />);
       const items = scryRenderedDOMComponentsWithTag(component, 'li');

       expect(items.length).to.equal(1);
       expect(items[0].textContent).to.contain('Country White');
    });

    it ('renders a list with all items', () => {
        const loaves = List.of(
            Map({id: 1, title: 'Country White', status: 'active'}),
            Map({id: 2, title: 'Country Brown', status: 'inactive'})
        );
        const filter = 'all';
        const component = renderIntoDocument(<LoafList filter={filter} loaves={loaves} />);
        const items = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(items.length).to.equal(2);
        expect(items[0].textContent).to.contain('Country White');
        expect(items[1].textContent).to.contain('Country Brown');
    });
});