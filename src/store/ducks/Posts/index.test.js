import { types } from './types';
import postsReducer from './index'

describe('Posts Reducer', () => {

    it('should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if receiving type', () => {
        const posts = [
            {title: 'Title 1'},
            {title: 'Title 2'},
            {title: 'Title 3'}
        ]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })

        expect(newState).toEqual(posts)
    })
})