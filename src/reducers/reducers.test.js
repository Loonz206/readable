import localStorageMock from '../setupTests';
import reducer from '../reducers';
import * as types from '../actions/index';

describe('categories reducer', () => {

    const categories = ['1', '2', '3'];

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
          {
            "categories": {
                "categories": []
            },
            "posts": {}
          }
        )
    })

    it('should return the categories', () => {
        expect(
            reducer([], {
              type: types.GET_CATEGORIES,
              categories
            })
          ).toEqual(
            {
              "categories": {
                  "categories": ["1", "2", "3"]
              },
              "posts": {}
            }
          )
    });
})