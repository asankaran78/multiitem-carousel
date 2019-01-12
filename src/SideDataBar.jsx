import React from 'react';
import statusImage from "./icon-pending.svg";


class SideDataBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAmountInfo =() =>{
        if(this.props.workflowtype!=="NAV") {
            return (
                <div>
                <p className="title">Amount</p>
                <p className="sideBarInfo">{this.props.amountinfo}</p>
                </div>
            );
          } 
    }

   

    renderHistoryInfo =() => {
        let workflowHistory = JSON.parse(this.props.workflowhistory)
        return (
            <div> {workflowHistory.map(workflowItem =>(
                <p className="sideBarHistory"key={workflowItem.description}>{workflowItem.description} {this.convertDate(workflowItem.postedDate)} By {workflowItem.postedBy}</p>
            ))}
            </div>
        );
    }

    

    convertDate = (inputDate) => {

        var date = new Date(parseInt(inputDate));
        // request a weekday along with a long date
        var options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric' ,minute:'numeric',timeZoneName:'short'};

        return(date.toLocaleDateString('en-US', options));
      }
    
    renderWorkflowStatus =(workflowStatus) =>{
        if(workflowStatus=="Pending") {
            return (
              <img src={statusImage} alt={"Status"} style={{ width: "12px", height:"12px",align:"left" }}/>
            );
          } 
    }
    
    render(){
       
        return (
            <div className="sideBar">
                <p className="titleCaps">STATUS</p>
                <p className="statusInfo">{this.renderWorkflowStatus(this.props.workflowStatus)} {this.props.workflowStatus}</p>
                <p className="title">Date</p>
                <p className="sideBarInfo">{this.props.asofdate.toString()}</p>
                <p className="title">Fund</p>
                <p className="sideBarInfo">{this.props.funddetails}</p> 
                {this.renderAmountInfo()}   
                <p className="titleCaps">HISTORY</p>         
                {this.renderHistoryInfo()}
            </div>
        );
    }
}

export default SideDataBar;
