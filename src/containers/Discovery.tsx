import React, { Component } from 'react'
import Discovery from '../components/discovery/Discovery'
import * as actions from '../actions'
import { AppState, Dispatch, ResourceState } from '../models'
import { connect } from 'react-redux'

interface ConnectProps {
    resource: ResourceState
}

interface DispatchProps {
    onFetchResource: () => any
}

class DiscoveryContainer extends Component<ConnectProps & DispatchProps> {
    intervalId: number

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('1 --> componentDidMount'); // DEBUG
        // this.intervalId = window.setInterval(() => { this.props.onIncrement() }, 1000)
    }

    render() {
        return <Discovery {...this.props} />
    }
}

export default connect<ConnectProps, DispatchProps>(
    (state: AppState) => {
        console.log('STATE --> ', state); // DEBUG
        return {
            resource: state.resource
        }
    },
    (dispatch: Dispatch) => ({
        onFetchResource: () => dispatch(actions.fetchResource())
    })
)(DiscoveryContainer)
