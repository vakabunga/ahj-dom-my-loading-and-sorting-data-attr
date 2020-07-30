import initTable from './initTable.js';

// функция сортировки по разным фильтрам
// filter может быть id, title, imdb, year - по какому полю сортируем
// direction может быть up (сортировка по возрастанию) и down (по убыванию)
export default function tableSort(filter, direction) {
  const tbody = document.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');
  const sortId = document.querySelector('[data-name="id"]');
  const sortTitle = document.querySelector('[data-name="title"]');
  const sortYear = document.querySelector('[data-name="year"]');
  const sortImdb = document.querySelector('[data-name="imdb"]');
  const arrows = document.querySelectorAll('img, .active');
  arrows.forEach((elem) => elem.classList.remove('active'));
  const rowsAttr = [];
  for (let i = 0; i < rows.length; i += 1) {
    rowsAttr.push(rows[i].dataset);
  }
  if (filter === 'id' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator('ru', { numeric: true }).compare(a.id, b.id)));
    sortId.querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'id' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator('ru', { numeric: true }).compare(b.id, a.id)));
    sortId.querySelector('.arrowDown').classList.add('active');
  }

  if (filter === 'title' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(a.title, b.title)));
    sortTitle.querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'title' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(b.title, a.title)));
    sortTitle.querySelector('.arrowDown').classList.add('active');
  }

  if (filter === 'imdb' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(a.imdb, b.imdb)));
    sortImdb.querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'imdb' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(b.imdb, a.imdb)));
    sortImdb.querySelector('.arrowDown').classList.add('active');
  }

  if (filter === 'year' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(a.year, b.year)));
    sortYear.querySelector('.arrowUp').classList.add('active');
  }

  if (filter === 'year' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(b.year, a.year)));
    sortYear.querySelector('.arrowDown').classList.add('active');
  }
}
