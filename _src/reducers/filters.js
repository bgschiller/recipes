import { TOGGLE_FILTER, SWAP_FILTER_DISPOSITION } from '../actions'
import { combineReducers } from 'redux'
import _ from 'underscore'

const INITIAL_STATE = window.INITIAL_STATE
const filterableKeys = _.keys(INITIAL_STATE)

function togglePresence(flags, toToggle){
  let ix = _.findIndex(flags, {value: toToggle})
  return [
    ...flags.slice(0, ix),
    {...flags[ix], active: !flags[ix].active},
    ...flags.slice(ix + 1)
  ]
}

function filterDisposition(state = 'any', action){
  switch (action.type) {
    case SWAP_FILTER_DISPOSITION:
      return action.newDisposition
    default:
      return state
  }
}

function options(state = [], action){
  switch (action.type) {
    case TOGGLE_FILTER:
      return togglePresence(state, action.option)
    default:
      return state
  }
}

function name(state = '', action){
  return state;
}

const filterReducer = combineReducers({
  filterDisposition,
  options,
  name
})


export default function filters(state = INITIAL_STATE, action){
  if (_.contains(filterableKeys, action.key))
    return {
      ...state,
      [action.key]: filterReducer(state[action.key], action)
    }
  return state
}
