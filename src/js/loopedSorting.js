import tableSort from './tableSort.js';
// функция запуска автоматической периодической сортировки

export default function loopedSorting() {
  const timer = () => {
    const e = new Date().getTime() + 2000;
    // eslint-disable-next-line no-empty
    while (new Date().getTime() <= e) {}
  };
  const filter = ['id', 'title', 'imdb', 'year'];
  const direction = ['up', 'down'];
  for (let i = 0; i < filter.length; i += 1) {
    for (let j = 0; j < direction.length; j += 1) {
      tableSort(i, j);
      timer();
    }
  }
}
