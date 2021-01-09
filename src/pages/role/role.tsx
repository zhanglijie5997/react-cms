import React, { Component }  from 'react';
import { RouteComponentProps } from 'react-router';
class Roles extends Component<RouteComponentProps, any>{
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            a: 1
        };
    }
    componentDidUpdate() {};
    getSnapshotBeforeUpdate() {
        return {}
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        return null;
    }
    componentDidMount() {}
    render() {
        return (
            <div>
                { this.state.a }
            </div>
        );
    }
}


const Role = (props: RouteComponentProps) => {
    return (
         <div><Roles {...props}></Roles></div> 
    )
};


export default Role;