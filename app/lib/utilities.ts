export function shuffle(array:any) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function generateCountArray(array:any) {
  const countArray = array.map((item: any) => ({
    ...item,
    count: 0
  }));
  return countArray;
}

export function doTheCounting(counter: any, countable: any, countField: string) {
  countable.forEach((item: any) => {
    item[countField].forEach((member: any) => {
      counter.forEach((element: any) => {
        if(element.value == member) {
          element.count++;
        }
      });
    });
  });
  return counter;
}
