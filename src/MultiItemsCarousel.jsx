import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

class MultiItemsCarousel extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
      navSummary: myJson.navSummary
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren()
      });
    }, 100);
  }


  createChildren = () =>{
    var arr = [];
    for(let i=0;i<this.state.navSummary.response.length;i++){
        arr.push(<div
          key={i + 1}
          className="carouselDisplay"
          onClick={this.handleIndexClick}
        >
          <p>{this.state.navSummary.response[i].fundName}</p>
          <p />
          <span className="carouselInner">{this.state.navSummary.response[i].navStatus}</span>
        </div>);
    }
    return arr;
  }


  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={20}
        minimumPlaceholderTime={1000}
        placeholderItem={
          <div style={{ height: 87, background: "#900", align: "center" }}>
            Placeholder
          </div>
        }
        // Carousel configurations
        numberOfCards={6}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={"center"}
        chevronWidth={25}
        rightChevron={">"}
        leftChevron={"<"}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );
  }
}

export default MultiItemsCarousel;
