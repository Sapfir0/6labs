import {MoveDirection} from "./common";


export type MovingElevatorTask = {
    toFloor: number
    priority: number
    calledFromElevator: boolean
    direction?: MoveDirection
}


export type FloorCallTask = { // без айдишника элеватора и с приоритетом
    fromFloor: number
    direction: MoveDirection
    priority: number
}

export type ElevatorCallTask = { // без айдишника элеватора
    toFloor: number
}