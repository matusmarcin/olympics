/* eslint-env jest, browser */
import loadingReducer from '../../src/reducers/loading';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    expect(
      loadingReducer(undefined, {}),
    ).toEqual(false);
  });

  it('should handle GET_OLYMPICS_DATA', () => {
    expect(
      loadingReducer([], {
        type: 'GET_OLYMPICS_DATA',
      }),
    ).toEqual(true);
  });

  it('should handle GET_OLYMPICS_DATA_ERROR', () => {
    expect(
      loadingReducer([], {
        type: 'GET_OLYMPICS_DATA_ERROR',
      }),
    ).toEqual(false);
  });

  it('should handle GET_OLYMPICS_DATA_RECEIVED', () => {
    expect(
      loadingReducer([], {
        type: 'GET_OLYMPICS_DATA_RECEIVED',
      }),
    ).toEqual(false);
  });
});
