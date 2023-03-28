import {
  setInputValue as setInputValueAction,
} from '../actions';

import { requestOptions } from './requestOptions';

import type {
  Dispatch,
} from '../thunkHelpers';

import {
  RequestOptionsCaller,
} from '../types';
import type {
  State,
} from '../types';

export const setInputValue = <OptionType, Additional>(
  inputValue: string,
) => (
    dispatch: Dispatch<OptionType, Additional>,
    getState: () => State<OptionType, Additional>,
  ) => {
    dispatch(setInputValueAction(inputValue));

    const {
      cache,
      menuIsOpen,
    } = getState();

    const currentCache = cache[inputValue];

    if (menuIsOpen && !currentCache) {
      dispatch(requestOptions(RequestOptionsCaller.InputChange));
    }
  };
