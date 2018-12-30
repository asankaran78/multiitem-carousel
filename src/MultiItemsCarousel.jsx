import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

class MultiItemsCarousel extends React.Component {

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(15),
      })
    }, 100);
  }

 /* createChildren = n => range(n).map(i => <div key={i} style={{ height: 87, background: '#EDF0F4' }}>
        <p>Franklin Group Investors's fund (FCGLX)</p>{i}</div>); */

    createChildren = n => range(n).map(i => <div key={i} className="carouselDisplay">
        <p>Franklin Group Investors's fund (FCGLX)</p>
        <span className="carouselInner">Awaiting Approval</span>
        </div>); 

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={20}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 87, background: '#900',align:'center' }}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={6}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={25}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 

export default MultiItemsCarousel;