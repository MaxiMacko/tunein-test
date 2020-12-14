export const getState = state => state
export const getMappedByIdData = state => {
    if (!state || !state.data) {
        return null
    }
    return state.data.reduce((acc,item) => {
        const {id, ...restItem} = item;
        return {
            ...acc,
            [id]: restItem,
        }
    }, {})
}
