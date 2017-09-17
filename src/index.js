import React from 'react';
import Arrows from './components/arrows';
import Indicators from './components/indicators';
import './index.less';

class SlideShow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };

    this.length = props.images.length;

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  handleLeftClick() {
    const { activeIndex } = this.state;
    const { length } = this;

    if (activeIndex !== 0) {
      this.goTo(this.state.activeIndex - 1);
    } else {
      this.goTo(length - 1);
    }
  }

  handleRightClick() {
    const { activeIndex } = this.state;
    const { length } = this;

    if (activeIndex !== length - 1) {
      this.goTo(this.state.activeIndex + 1);
    } else {
      this.goTo(0);
    }
  }

  handleIndicatorClick(e) {
    this.goTo(+e.currentTarget.dataset.index);
  }

  goTo(activeIndex) {
    this.setState({activeIndex});
  }

  render() {
    const { images } = this.props;
    const length = images.length;
    const { activeIndex } = this.state;
    
    return (
      <div className="slide-show">
        <Arrows
          onLeftClick={this.handleLeftClick} onRightClick={this.handleRightClick}
        />
        <div className="item-container">
          {images.map((v, i) => (
            <div
              style={{
                transform: `translateX(${100 * (i - activeIndex)}%)`,
                transition: 'all 500ms ease-out'
              }}
              key={i} className={`item${activeIndex === i ? " active" : ""}`}
            >
              <img src={v} key={i} />
            </div>
          ))}
          <Indicators
            count={length} activeIndex={activeIndex}
            onClick={this.handleIndicatorClick}
          />
        </div>
      </div>
    );
  }
}

export default SlideShow