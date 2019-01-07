import React from 'react';

class NavApproval extends React.Component {

    render(){
        const {workflowType,fundId} = this.props;
        return (
            <div className="sideBar">
                <span className="carouselInner">{workflowType} </span>
                <span>{fundId}</span>
            </div>
        );
    }
}

export default NavApproval;
