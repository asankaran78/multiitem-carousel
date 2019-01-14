import React from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import myJson from "./carouseldata.json";
import SideDataBar from "./SideDataBar";
import statusImage from "./icon-pending.svg";

class MultiItemsCarousel extends React.Component {

  componentWillMount() {
    this.setState({
      children: [],
      workflowhistory:[],
      activeItemIndex: 0,
      navSummary: myJson.responseData.data,
      workflowstatus:'',
      workflowtype:'',
      asofdate:'',
      funddetails:'',
      amountinfo:'',
      divClickId:'',
      render:false
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren()
      });
    }, 100);
  }

  handleIndexClick = event => {
    if(this.state.divClickId!==event.currentTarget.dataset.divId && this.state.divClickId!=="" ){
     let prevSelectedNode = document.querySelector(".carouselDisplayPressed");
     prevSelectedNode.classList.replace("carouselDisplayPressed","carouselDisplay");
    }
    this.setState({
       funddetails:event.currentTarget.dataset.fundDetails,
       workflowtype:event.currentTarget.dataset.workflowType,
       workflowstatus:event.currentTarget.dataset.workflowStatus,
       asofdate:this.convertDate(event.currentTarget.dataset.asOfDate),
       amountinfo:event.currentTarget.dataset.amountInfo,
       workflowhistory: event.currentTarget.dataset.workflowHistory,
       divClickId:event.currentTarget.dataset.divId,
       render:true
    });
    event.currentTarget.className ="carouselDisplayPressed";   
  }

  convertDate = (inputDate) => {

    var dateInput = new Date(parseInt(inputDate));
    const month = dateInput.toLocaleString('en-us', { month: 'long' });
    const day =   dateInput.getUTCDate();
    const year =  dateInput.getUTCFullYear();
    return(month + " "+ day+ ","+ " "+ year);
  }

  renderWorkflowStatus =(workflowStatus) =>{
    if(workflowStatus=="Pending") {
        return (
          <img src={statusImage} alt={"Status"} style={{ width: "12px", height:"12px",align:"left" }}/>
        );
      } 
}

  createChildren = () =>{
    var arr = [];
    for(let i=0;i<this.state.navSummary.response.length;i++){
        arr.push(<div data-div-id={"carousel"+ i}
          key={i + 1}
          className="carouselDisplay"
          onClick={this.handleIndexClick}    
          data-as-of-date={this.state.navSummary.response[i].asOfDate}  
          data-workflow-status={this.state.navSummary.response[i].workflowStatus} 
          data-workflow-type={this.state.navSummary.response[i].workflowType} 
          data-fund-details={this.state.navSummary.response[i].fundName + "(" + this.state.navSummary.response[i].fundCode +")"} 
          data-workflow-history={ JSON.stringify(this.state.navSummary.response[i].workflowHistory)}
          data-amount-info={(() => {
            if(this.state.navSummary.response[i].fundCurrencyType === "USD"){
              return "$" + this.state.navSummary.response[i].amount;
            }
          })()
        } 
        >
          <p className="carouselDisplayFundName">{this.state.navSummary.response[i].fundName} ( {this.state.navSummary.response[i].fundCode} ) </p>
          <p className="carouselWorkFlowStatus">{this.renderWorkflowStatus(this.state.navSummary.response[i].workflowStatus)} {this.state.navSummary.response[i].workflowStatus}</p>
          <p className="carouselInner" >{this.state.navSummary.response[i].workflowType}  </p>
        </div>);
    }
    return arr;
  }


  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <div>
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={20}
        minimumPlaceholderTime={1000}
        placeholderItem={
          <div style={{ height: "90px", background: "#FFFFFF", align: "center" }}>
            Placeholder
          </div>
        }
        // Carousel configurations
        numberOfCards={5}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={"center"}
        chevronWidth={20}
        rightChevron={">"}
        leftChevron={"<"}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
       { this.state.render ?
        <SideDataBar  
        workflowStatus = {this.state.workflowstatus}
        workflowtype = {this.state.workflowtype}
        asofdate={this.state.asofdate}
        funddetails={this.state.funddetails}
        amountinfo={this.state.amountinfo}
        workflowhistory={this.state.workflowhistory}/> :null
      }
      
      
      </div>
    );
  }
}

export default MultiItemsCarousel;
