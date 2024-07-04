// sortingAlgorithms.js

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  const pivotIdx = partition(mainArray, startIdx, endIdx, animations);
  quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
  quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
}

function partition(array, startIdx, endIdx, animations) {
  const pivot = array[endIdx];
  let pivotIdx = startIdx;
  for (let i = startIdx; i < endIdx; i++) {
    animations.push([i, endIdx]);
    animations.push([i, endIdx]);
    if (array[i] <= pivot) {
      animations.push([i, array[pivotIdx]]);
      animations.push([pivotIdx, array[i]]);
      [array[i], array[pivotIdx]] = [array[pivotIdx], array[i]];
      pivotIdx++;
    } else {
      animations.push([i, array[i]]);
    }
  }
  animations.push([endIdx, array[pivotIdx]]);
  animations.push([pivotIdx, array[endIdx]]);
  [array[endIdx], array[pivotIdx]] = [array[pivotIdx], array[endIdx]];
  return pivotIdx;
}

export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSort(array, animations);
  return animations;
}

function heapSort(array, animations) {
  const length = array.length;
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, length, i, animations);
  }
  for (let i = length - 1; i > 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([0, array[i]]);
    animations.push([i, array[0]]);
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, animations);
  }
}

function heapify(array, length, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < length && array[left] > array[largest]) {
    largest = left;
  }
  if (right < length && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([i, array[largest]]);
    animations.push([largest, array[i]]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, length, largest, animations);
  }
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else {
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }
  }
}

  