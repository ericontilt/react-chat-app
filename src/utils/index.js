export const findLast = (items, predicate) => {
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];

    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
};

export const findLastIndex = (items, predicate) => {
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];

    if (predicate(item)) {
      return i;
    }
  }
  return -1;
};
