import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Headline from './index';


const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@mail.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
            expect(propsErr).toBeUndefined();
        });
    });     

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }    
            wrapper = setUp(props);
        });

        it('should render withour errors', () => {
            const component = wrapper.find(`[data-test='headlineComponent']`);
            expect(component.length).toBe(1);
        });

        it('should render a H1', () => {
            const h1 = wrapper.find(`[data-test='header']`);
            expect(h1.length).toBe(1);
        });

        it('should render a desc', () => {
            const desc = wrapper.find(`[data-test='desc']`);
            expect(desc.length).toBe(1);
        })
    });

    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should not render', () => {
            const component = wrapper.find(`[data-test='headlineComponent']`);
            expect(component.length).toBe(0);
        })
    });
})