import {Map, List} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function toggleOpen(state, itemId) {
    var updatedList = [];
    state.get('loaves').map(item => {
        updatedList.push(item.update('open', open => (item.get('id') === itemId) ));
    });

    const updatedLoaves = List(updatedList);

    return state.update(state => state.set('loaves', updatedLoaves));
}

//
// function toggleOpen(state, itemId) {
//     const itemIndex = state.get('loaves').findIndex(
//         (item) => item.get('id') === itemId
//     );
//
//     const updatedItem = state.get('loaves')
//         .get(itemIndex)
//         .update('open', open => !open);
//
//     return state.update('loaves', loaves => loaves.set(itemIndex, updatedItem));
// }

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_OPEN':
            return toggleOpen(state, action.itemId);
    }
    return state;
}