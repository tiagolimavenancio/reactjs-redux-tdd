import React from 'react';
import { shallow } from 'enzyme';

import { applyMiddleware, createStore } from 'redux';
import { middlewares } from './store';
import reducers from './store/ducks';

import App from './App';

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(reducers, initialState);
}

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {

    let wrapper ;
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example Title 1',
                body: 'Some Text'
            }, {
                title: 'Example Title 2',
                body: 'Some Text'
            }, {
                title: 'Example Title 3',
                body: 'Some Text'
            }]
        }
        wrapper = setUp(initialState);
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should render without errors', () => {
        const component = wrapper.find(`[data-test='appComponent']`);
        expect(component.length).toBe(1);
    });

    it('should updateState method as expected', () => {
        
    });

    it('should returnsAValue method as expected', () => {
        
    });

})