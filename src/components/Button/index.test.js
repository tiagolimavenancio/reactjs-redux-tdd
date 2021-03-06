import React from 'react'
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import SharedButton from './index'

describe('SharedButton Component', () => {
    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkPropTypes(SharedButton.propTypes, expectedProps, 'props', SharedButton.name);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Renders', () => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props} />)
        });

        it('should render a button', () => {            
            const button = wrapper.find(`[data-test='buttonComponent']`);
            expect(button.length).toBe(1);
        });

        it('should emit callback on click event', () => {
            const button = wrapper.find(`[data-test='buttonComponent']`);
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1)
        })
    })
})
