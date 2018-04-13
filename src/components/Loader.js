import React from 'react';
import { RiseLoader } from 'react-spinners';

export default class LoaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className="spinner">
                <RiseLoader
                    color={'#353b48'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}