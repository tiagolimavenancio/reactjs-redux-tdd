import moxios from 'moxios';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../index';
import { middlewares } from '../../index';
import { fetchPosts } from './actions'

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(reducers, initialState);
}

describe('FetchPosts Action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('store is updated correctly', () => {
        const expectedState = [
            {
                title: 'Example Title 1',
                body: 'Some Text'
            },
            {
                title: 'Example Title 2',
                body: 'Some Text'
            },
            {
                title: 'Example Title 3',
                body: 'Some Text'
            },
        ]
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
});
