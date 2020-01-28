import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

// const findByTestAttr = (component, attr) => {
//     const wrapper = component.find(`[data-test='${attr}']`);
//     return wrapper;
// }

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without errors', () => {    
        const wrapper = component.find(`[data-test='headerComponent']`);
        expect(wrapper.length).toBe(1);
    });  
    
    it('should render a logo', () => {        
        const wrapper = component.find(`[data-test='logoIMG']`);
        expect(wrapper.length).toBe(1);
    });
});