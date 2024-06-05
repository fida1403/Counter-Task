import "./CounterAction"

// const initialstate = {
//     count1: 0,
//     count2: 0,
//     count3: 0,
//     count4: 0,
//     error: ''
// }


// const CounterReducer = (state=initialstate, action) => {
//     switch(action.type){
//         case 'INCREMENTCOUNT1': 
//             if(state.count1 < 10){
//                 return{
//                     ...state,
//                     count1: state.count1+1,
//                     error1: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error : "Counter 1 has reached the maximum value 10"
//                 }
//             }
//         case 'INCREMENTCOUNT2': 
//             if(state.count2 < 10){
//                 return{
//                     ...state,
//                     count2: state.count2+1,
//                     error2: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error2 : "Counter 2 has reached the maximum value 10"
//                 }
//             }
//         case 'INCREMENTCOUNT3': 
//             if(state.count3 < 10){
//                 return{
//                     ...state,
//                     count3: state.count3+1,
//                     error3: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error3 : "Counter 3 has reached the maximum value 10"
//                 }
//             }
//         case 'INCREMENTCOUNT4': 
//             if(state.count4 < 10){
//                 return{
//                     ...state,
//                     count4: state.count4+1,
//                     error4: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error4 : "Counter 4 has reached the maximum value 10"
//                 }
//             }
    
//         case 'DECREMENTCOUNT1': 
//             if(state.count1 > 0){
//                 return{
//                     ...state,
//                     count1: state.count1-1,
//                     error1: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error1 : "Counter 1 has reached the minimum value 0"
//                 }
//             }
//         case 'DECREMENTCOUNT2': 
//             if(state.count2 > 0){
//                 return{
//                     ...state,
//                     count2: state.count2-1,
//                     error2: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error2 : "Counter 2 has reached the minimum value 0"
//                 }
//             }
//         case 'DECREMENTCOUNT3': 
//             if(state.count3 > 0){
//                 return{
//                     ...state,
//                     count3: state.count3-1,
//                     error3: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error3 : "Counter 3 has reached the minimum value 0"
//                 }
//             }
//         case 'DECREMENTCOUNT4': 
//             if(state.count4 > 0){
//                 return{
//                     ...state,
//                     count4: state.count4-1,
//                     error4: null
//                 }
//             }else{
//                 return{
//                     ...state,
//                     error4 : "Counter 4 has reached the minimum value 0"
//                 }
//             }
        
//         case 'RESET': return{
//             count1: 0,
//             count2: 0,
//             count3: 0,
//             count4: 0
//         }

//         default: return state
//     }
// }



const initialstate = {
    count : [0, 0, 0, 0],
    error : ['', '', '', '']
}

const CounterReducer = (state=initialstate, action) => {
    switch(action.type){
        case 'INCREMENT':{
            const newCount = [...state.count]
            const newError = [...state.error]
            if(newCount[action.payload]<10){
                newCount[action.payload] = newCount[action.payload]+1
                newError[action.payload] = ''
            }else{
                newError[action.payload]=`counter ${action.payload + 1} has reached maximum value of 10`
            }
            return {
                count:newCount,
                error:newError
            }
        }

        case 'DECREMENT':{
            const newCount = [...state.count]
            const newError = [...state.error]
            if(newCount[action.payload] > 0){
                newCount[action.payload] = newCount[action.payload] - 1
                newError[action.payload] = ''
            }else{
                newError[action.payload]= `Counter ${action.payload +1 } has reached minimum value of 0`
            }
            return {
                count:newCount,
                error:newError
            }
        }

        case 'RESET':{
            return initialstate
        }

        default: return state
    }
}

export default CounterReducer