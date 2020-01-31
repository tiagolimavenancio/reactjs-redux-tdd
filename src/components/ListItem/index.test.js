import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import ListItem from './index';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            const propsError = checkPropTypes(ListItem.propTypes, expectedProps, 'props', ListItem.name);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />)
        });

        it('should renders without error', () => {
            const component = wrapper.find(`[data-test='listItemComponent']`);
            expect(component.length).toBe(1);
        });

        it('should render a title', () => {
            const title = wrapper.find(`[data-test='componentTitle']`);
            expect(title.length).toBe(1);
        });

        it('should a render a desc', () => {
            const desc = wrapper.find(`[data-test='componentDesc']`);
            expect(desc.length).toBe(1);
        });
    });

    describe('should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />)
        });

        it('should component is not renderer', () => {
            const component = wrapper.find(`[data-test='listItemComponent']`);
            expect(component.length).toBe(0);
        })
    })
})