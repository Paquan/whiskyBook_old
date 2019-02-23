import React from 'react';
import { TabPane } from 'reactstrap';
import { Star } from '../../../assets/img/icons/Star';
import Stars from '../../../assets/img/icons/stars';
import anime from 'animejs';
import lottie from 'lottie-web';

import './RatingTab.css';

const rate = rating => {
  let deselectedTargets = [];
  let selectedTargets = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      selectedTargets.push(`#rate${index + 1} path`);
    } else {
      deselectedTargets.push(`#rate${index + 1} path`);
    }
  }
  selectStars(selectedTargets);
  deselectStars(deselectedTargets);
};

const selectStars = targets => {
  this.animeRef = anime({
    targets,
    duration: 150,
    scale: 1.1,
    easing: 'easeInOutQuad',
    direction: 'alternate'
  });
  this.animeRef = anime({
    targets,
    fill: 'rgb(255, 217, 31)',
    duration: 150,
    easing: 'easeInOutQuad'
  });
};

const deselectStars = targets => {
  this.animeRef = anime({
    targets,
    fill: '#fff',
    duration: 150,
    easing: 'easeInOutQuad'
  });
};

export class RatingTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: 0
    };
  }

  componentDidMount() {
    for (let index = 0; index < 5; index++) {
      lottie
        .loadAnimation({
          container: document.getElementById(`rate-${index + 1}`),
          renderer: 'svg',
          loop: false,
          autoplay: false,
          name: 'rate-' + index,
          animationData: Stars
        })
        .goToAndStop(10, true);
    }
  }

  animation = rate => {
    lottie.getRegisteredAnimations().forEach((star, index) => {
      if (index < rate && (star.currentFrame === 10 || star.currentFrame === 29)) {
        star.playSegments([10, 30]);
      } else if (star.currentFrame === 19 && index >= rate) {
        star.playSegments([70, 100]);
      }
    });
  };

  render() {
    return (
      <TabPane tabId={this.props.tabId.toString()}>
        <div className="rating">
          <span
            className="rating-star"
            id="rate1"
            onClick={() => {
              rate(1);
            }}
          >
            <Star color={'#fff'} borderColor={'rgb(255, 217, 31)'} />
          </span>
          <span
            className="rating-star"
            id="rate2"
            onClick={() => {
              rate(2);
            }}
          >
            <Star color={'#fff'} borderColor={'rgb(255, 217, 31)'} />
          </span>
          <span
            className="rating-star"
            id="rate3"
            onClick={() => {
              rate(3);
            }}
          >
            <Star color={'#fff'} borderColor={'rgb(255, 217, 31)'} />
          </span>
          <span
            className="rating-star"
            id="rate4"
            onClick={() => {
              rate(4);
            }}
          >
            <Star color={'#fff'} borderColor={'rgb(255, 217, 31)'} />
          </span>
          <span
            className="rating-star"
            id="rate5"
            onClick={() => {
              rate(5);
            }}
          >
            <Star color={'#fff'} borderColor={'rgb(255, 217, 31)'} />
          </span>
        </div>
        
        <div id="rating">
          <div
            id="rate-1"
            onClick={() => {
              this.animation(1);
            }}
          />
          <div
            id="rate-2"
            onClick={() => {
              this.animation(2);
            }}
          />
          <div
            id="rate-3"
            onClick={() => {
              this.animation(3);
            }}
          />
          <div
            id="rate-4"
            onClick={() => {
              this.animation(4);
            }}
          />
          <div
            id="rate-5"
            onClick={() => {
              this.animation(5);
            }}
          />
        </div>
      </TabPane>
    );
  }
}
