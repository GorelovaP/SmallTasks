import {UserType} from "../HW8";

type actionType = {
    type: string;
    payload: string
}

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") {
                let CopyState = [...state]
                return CopyState.sort(function (a, b) {
                    let aname = a.name.toLowerCase(),
                        bname = b.name.toLowerCase();
                    if (aname < bname) return -1;
                    if (aname > bname) return 1;
                    else return 0
                })
            }
            if (action.payload === "down") {
                let CopyState = [...state]
                return CopyState.sort(function (a, b) {
                    let aname = a.name.toLowerCase(),
                        bname = b.name.toLowerCase();
                    if (bname < aname) return -1;
                    if (bname > aname) return 1;
                    else return 0
                })
            }

            return state
        }
        case 'check': {
            let CopyState = [...state]
            return action.payload === "18" ? CopyState.filter(o => o.age >= 18) : state
        }
        default:
            return state
    }
}