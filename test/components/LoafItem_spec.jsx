import React from 'react';
import TestUtils from 'react-addons-test-utils';
import LoafItem from '../../src/components/LoafItem';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;

describe('LoafItem', () => {
    it ('renders an item', () => {
        const text = 'Country White';
        const component = renderIntoDocument(<LoafItem title={text} />);
        const loaf = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(loaf.length).to.equal(1);
        expect(loaf[0].textContent).to.contain(text);
    });

    it('opens detail view if selected', () => {
        const text1 = 'Country White';
        const text2 = 'Country Brown';
        const component = renderIntoDocument(
            <LoafItem text={text1} isOpen={true}/>
        );
        const component2 = renderIntoDocument(
            <LoafItem text={text2} isOpen={false}/>
        );
        const loaf = scryRenderedDOMComponentsWithTag(component, 'li');
        const loaf2 = scryRenderedDOMComponentsWithTag(component2, 'li');

        expect(loaf[0].classList.contains('open')).to.equal(true);
        expect(loaf2[0].classList.contains('open')).to.equal(false);
    });

    it('invokes callback when the list item is clicked to be', () => {
        const text = 'Country White';
        var open = false;
        // We define a mock deleteItem function
        const openItem = () => open = true;
        const component = renderIntoDocument(
            <LoafItem text={text} openItem={openItem}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'li');
        Simulate.click(buttons[0]);

        // We verify that the openItem function has been called
        expect(open).to.equal(true);
    });
});