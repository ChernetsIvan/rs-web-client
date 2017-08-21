var mockApiData = [
    {id: 1, name: 'Name1'},
    {id: 2, name: 'Name2'},
    {id: 3, name: 'Name3'},
    {id: 4, name: 'Name4'},
    {id: 5, name: 'Name5'}
];

export const getTracks = () => dispatch => {
    setTimeout(()=>{
        console.log('I got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
    }, 2000);
}
