import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { ATMStore } from '../../../../Components/ATM/ATMStore';
import { Input, InputOnChangeData, List, ListItem } from 'semantic-ui-react';

export interface ISetSendMoney {
    store: ATMStore
}

@observer
export class SetSendMoney extends Component<ISetSendMoney> {
    onChange = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        this.props.store.keyboardStore.addNumberToInput(Number.parseInt(data.value))
    }

    render() {
        return (
            <div>
                Укажите сумму:

                <Input onChange={this.onChange} />
                
            
            </div>
        );
    }
}