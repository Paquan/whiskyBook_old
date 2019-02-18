import React from 'react';
import { TabPane } from 'reactstrap';
import { Star } from '../../../assets/img/icons/Star';
import Stars from '../../../assets/img/icons/stars';
import anime from 'animejs';
import bodymovin from 'lottie-web';

// import TweenMax from 'gsap/TweenMax';
// import Draggable from 'gsap/Draggable';

import './RatingTab.css';

const animation = () => {
  bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: Stars,
    direction: 1
  });
};
const back = () => {
  bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: Stars,
    direction: -1
  });
};

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
    fill: '#ffc107',
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

export const RatingTab = ({ tabId }) => (
  <TabPane tabId={tabId.toString()}>
    <div className="rating">
      <span
        className="rating-star"
        id="rate1"
        onClick={() => {
          rate(1);
        }}
      >
        <Star color={'#fff'} borderColor={'#ffc107'} />
      </span>
      <span
        className="rating-star"
        id="rate2"
        onClick={() => {
          rate(2);
        }}
      >
        <Star color={'#fff'} borderColor={'#ffc107'} />
      </span>
      <span
        className="rating-star"
        id="rate3"
        onClick={() => {
          rate(3);
        }}
      >
        <Star color={'#fff'} borderColor={'#ffc107'} />
      </span>
      <span
        className="rating-star"
        id="rate4"
        onClick={() => {
          rate(4);
        }}
      >
        <Star color={'#fff'} borderColor={'#ffc107'} />
      </span>
      <span
        className="rating-star"
        id="rate5"
        onClick={() => {
          rate(5);
        }}
      >
        <Star color={'#fff'} borderColor={'#ffc107'} />
      </span>
    </div>
    <button
      className="btn btn-primary"
      onClick={() => {
        animation();
      }}
    >
      CLICK
    </button>
    <button
      className="btn btn-primary"
      onClick={() => {
        back();
      }}
    >
      BACK
    </button>
    <div id="bm" />
  </TabPane>
);
