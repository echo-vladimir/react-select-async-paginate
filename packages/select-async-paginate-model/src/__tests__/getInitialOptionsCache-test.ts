import { getInitialOptionsCache } from '../getInitialOptionsCache';

import {
  Params,
} from '../types/public';

const defaultParams: Params<unknown, unknown> = {
  loadOptions: () => ({
    options: [],
  }),
};

test('should return empty options cache', () => {
  const initialOptionsCache = getInitialOptionsCache(defaultParams);

  expect(initialOptionsCache).toEqual({});
});

test('should return options cache with "initialOptions" param', () => {
  const options = [
    {
      label: 'label 1',
      value: 'value 1',
    },
    {
      label: 'label 2',
      value: 'value 2',
    },
  ];

  const initialOptionsCache = getInitialOptionsCache({
    ...defaultParams,
    initialOptions: options,
  });

  expect(initialOptionsCache).toEqual({
    '': {
      isFirstLoad: false,
      isLoading: false,
      hasMore: true,
      options,
      additional: undefined,
    },
  });
});

test('should set "additional" with "initialAdditional" param in initialOptionsCache', () => {
  const options = [
    {
      label: 'label 1',
      value: 'value 1',
    },
  ];

  const initialOptionsCache = getInitialOptionsCache({
    ...defaultParams,
    initialOptions: options,
    initialAdditional: {
      page: 2,
    },
  });

  expect(initialOptionsCache).toEqual({
    '': {
      isFirstLoad: false,
      isLoading: false,
      hasMore: true,
      options,
      additional: {
        page: 2,
      },
    },
  });
});
