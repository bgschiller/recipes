import { TOGGLE_FILTER, SWAP_FILTER_DISPOSITION } from '../actions'
import { combineReducers } from 'redux'
import _ from 'underscore'

const INITIAL_STATE = {
  course: {
    filterDisposition: 'any_of',
    tags: ['appetizer', 'beverage', 'main_dish']
  },
  dietary_restrictions: {
    filterDisposition: 'all_of',
    tags: ['vegetarian', 'gluten_free']
  },
  prep_time: {
    filterDisposition: 'any of',
    tags: ['5min', '15min']
  },
  cook_time: {
    filterDisposition: 'any of',
    tags: ['30min', '1hr']
  },
  contributor: {
    filterDisposition: 'any of',
    tags: ['Brian']
  }
}

const filterableKeys = _.keys(INITIAL_STATE)

function togglePresence(flags, toToggle){
  if (_.contains(flags, toToggle)){
    return _.reject(flags, (fl) => fl == toToggle);
  } else {
    return [toToggle, ...flags];
  }
}

function filterDisposition(state, action){
  switch (action.type) {
    case SWAP_FILTER_DISPOSITION:
      return action.newDisposition
    default:
      return state
  }
}

function tags(state, action){
  switch (action.type) {
    case TOGGLE_FILTER:
      return togglePresence(state, action.option)
    default:
      return state
  }
}

const filterReducer = combineReducers({
  filterDisposition,
  tags
})


export default function filters(state = INITIAL_STATE, action){
  if (_.contains(filterableKeys, action.key))
    return {
      ...state,
      [action.key]: filterReducer(state[action.key])
    }
  return state
}
