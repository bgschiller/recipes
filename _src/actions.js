export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const SWAP_FILTER_DISPOSITION = 'SWAP_FILTER_DISPOSITION'

export function toggleFilter(key, option){
  return {
    type: TOGGLE_FILTER,
    key,
    option
  }
}

export function swapFilterDisposition(key, newDisposition){
  return {
    type: SWAP_FILTER_DISPOSITION,
    key,
    newDisposition
  }
}
