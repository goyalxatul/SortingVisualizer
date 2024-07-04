import React from 'react';
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getHeapSortAnimations,
  getBubbleSortAnimations,
} from '../sortingAlgorithms/sortingAlgorithms.js';

import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 1;
const PRIMARY_COLOR = 'pink';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      numberOfArrayBars: 100,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const { numberOfArrayBars } = this.state;
    const array = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 900));
    }
    this.setState({ array });
  }

  handleSliderChange = (event) => {
    this.setState({ numberOfArrayBars: event.target.value }, () => this.resetArray());
  };

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (!barOneStyle || !barTwoStyle) {
          console.error(`Invalid index: barOneIdx=${barOneIdx}, barTwoIdx=${barTwoIdx}`);
          continue;
        }
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx]?.style;
          if (!barOneStyle) {
            console.error(`Invalid index: barOneIdx=${barOneIdx}`);
            return;
          }
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (!barOneStyle || !barTwoStyle) {
          console.error(`Invalid index: barOneIdx=${barOneIdx}, barTwoIdx=${barTwoIdx}`);
          continue;
        }
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx]?.style;
          if (!barOneStyle) {
            console.error(`Invalid index: barOneIdx=${barOneIdx}`);
            return;
          }
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (!barOneStyle || !barTwoStyle) {
          console.error(`Invalid index: barOneIdx=${barOneIdx}, barTwoIdx=${barTwoIdx}`);
          continue;
        }
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx]?.style;
          if (!barOneStyle) {
            console.error(`Invalid index: barOneIdx=${barOneIdx}`);
            return;
          }
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (!barOneStyle || !barTwoStyle) {
          console.error(`Invalid index: barOneIdx=${barOneIdx}, barTwoIdx=${barTwoIdx}`);
          continue;
        }
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx]?.style;
          if (!barOneStyle) {
            console.error(`Invalid index: barOneIdx=${barOneIdx}`);
            return;
          }
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const { array, numberOfArrayBars } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px`, backgroundColor: PRIMARY_COLOR }}
          ></div>
        ))}
        <div className="controls-container">
          <div className="controls-row">
            <button className="large-button" onClick={() => this.resetArray()}>
              Generate New Array
            </button>
            <input
              type="range"
              className="slider"
              min="10"
              max="300"
              value={numberOfArrayBars}
              onChange={this.handleSliderChange}
            />
            <div className="controls-label">Number of Bars: {numberOfArrayBars}</div>
          </div>
          <div className="controls-row">
            <button className="large-button" onClick={() => this.mergeSort()}>
              Merge Sort
            </button>
            <button className="large-button" onClick={() => this.quickSort()}>
              Quick Sort
            </button>
            <button className="large-button" onClick={() => this.heapSort()}>
              Heap Sort
            </button>
            <button className="large-button" onClick={() => this.bubbleSort()}>
              Bubble Sort
            </button>
            <button
              className="large-button"
              onClick={() => this.testSortingAlgorithms()}
            >
              Test Sorting Algorithms (BROKEN)
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  
}

// Helper functions
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

