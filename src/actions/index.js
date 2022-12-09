// Our actions contain all of the possible things that we can do 
// The "type" designates the action we want to take
// The optional "payload" designates any extra information we want to pass through to the reducer
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const incrementByNumber = (number) => {
    return {
        type: "INCREMENT_BY_NUMBER",
        payload: number
    }
}

export const loginUser = () => {
    return {
        type: "LOGIN"
    }
}

// function increment2() {
//     return {
//         type: "INCREMENT"
//     }
// }