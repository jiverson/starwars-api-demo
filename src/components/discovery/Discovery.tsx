import React, { Component, MouseEvent } from 'react'
import Button from '@material-ui/core/Button'
import './Discovery.css'
import { ResourceState } from '../../models';

interface Props {
    resource: ResourceState
    onFetchResource: () => void
}

class Discovery extends Component<Props> {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        console.log('2 --> componentDidMount'); // DEBUG
    }

    handleClick = (e: MouseEvent<HTMLElement>) => {
        console.log('1 --> handleClick'); // DEBUG
        console.log('1 --> ', this.props.resource); // DEBUG
        this.props.onFetchResource()
    }

    checkResourseData = (e: MouseEvent<HTMLElement>) => {
        console.log('clicked', this.props.resource)
    }

    render() {
        return (
            <>
                <Button onClick={this.handleClick}>Discover API</Button>
                <Button onClick={this.checkResourseData}>Check resource</Button>
            </>    
        )
    }
}

export default Discovery
