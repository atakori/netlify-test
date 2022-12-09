// This reducer keeps track of the current count. 
// The initial state of 0 sets the count to 0 when the app is first launched

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "INCREMENT_BY_NUMBER":
            return state + action.payload;
        default:
            return state;
    }
}

export default counterReducer;

// The above example contains the same logic as below. The only difference is the 
// above uses a switch statement While the below function uses an if/else statement
// IF ELSE EXAMPLE
// const counterReducerIFELSE = (state = 0, action) => {
//     if(action.type === "INCREMENT") {
//         return state + 1;
//     }
//     else {
//         return state;
//     }
// }