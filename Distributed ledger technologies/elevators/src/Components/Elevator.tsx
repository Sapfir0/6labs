import React from "react";

export interface IElevator {

}

export default class Elevator extends React.Component<IElevator> {
    constructor(props: IElevator) {
        super(props);

        this.state = {

        }
    }

    render() {
        return <>  Лифт </>;
    }
}