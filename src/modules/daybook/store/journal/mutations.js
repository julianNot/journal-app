

export const setEntries =  ( state, entries ) => {
    state.entries = [ ... state.entries, ...entries]
    state.isLoading = false
} 