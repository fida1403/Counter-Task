// const incrementAction1 = () => {
//     return {
//         type: 'INCREMENTCOUNT1'
//     }
// }

// const decrementAction1 = () => {
//     return {
//         type: 'DECREMENTCOUNT1'
//     };
// }

// const incrementAction2 = () => {
//     return {
//         type: 'INCREMENTCOUNT2'
//     }
// }

// const decrementAction2 = () => {
//     return {
//         type: 'DECREMENTCOUNT2'
//     };
// }

// const incrementAction3 = () => {
//     return {
//         type: 'INCREMENTCOUNT3'
//     }
// }

// const decrementAction3 = () => {
//     return {
//         type: 'DECREMENTCOUNT3'
//     };
// }

// const incrementAction4 = () => {
//     return {
//         type: 'INCREMENTCOUNT4'
//     }
// }

// const decrementAction4 = () => {
//     return {
//         type: 'DECREMENTCOUNT4'
//     };
// }

// const resetAction = () => {
//     return{
//         type: 'RESET'
//     }
// }


// export { incrementAction1, decrementAction1, incrementAction2, incrementAction3, incrementAction4, decrementAction2, decrementAction3, decrementAction4, resetAction };




export const incrementAction = (index) => {
    return {
        type: 'INCREMENT',
        payload: index
    }
}

export const decrementAction = (index) => {
    return{
        type: 'DECREMENT',
        payload: index
    }
}

export const resetAction = () => {
   return{
      type: 'RESET'
   }
}