import localStorageMock from '../setupTests';
import * as actions from '../actions/index';
import * as types from '../actions/index';

describe('actions', () => {
  it('should create an action to get the categories', () => {
    const categories = ['Funny', 'About', 'Contact'];
    const expectedAction = {
      type: types.GET_CATEGORIES,
      categories
    }
    expect(actions.getCategories(categories)).toEqual(expectedAction)
  })
})