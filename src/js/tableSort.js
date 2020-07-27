import initTable from './initTable.js';

// функция сортировки по разным фильтрам
// filter может быть id, title, imdb, year - по какому полю сортируем
// direction может быть up (сортировка по возрастанию) и down (по убыванию)
export default function tableSort(filter, direction) {
  const tbody = document.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');
  const rowsAttr = [];
  for (let i = 0; i < rows.length; i += 1) {
    rowsAttr.push(rows[i].dataset);
  }
  if (filter === 'id' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator('ru', { numeric: true }).compare(a.id, b.id)));
  }

  if (filter === 'id' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator('ru', { numeric: true }).compare(b.id, a.id)));
  }

  if (filter === 'title' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(a.title, b.title)));
  }

  if (filter === 'title' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(b.title, a.title)));
  }

  if (filter === 'imdb' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(a.imdb, b.imdb)));
  }

  if (filter === 'imdb' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(b.imdb, a.imdb)));
  }

  if (filter === 'year' && direction === 'up') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(a.year, b.year)));
  }

  if (filter === 'year' && direction === 'down') {
    initTable(rowsAttr.sort((a, b) => Intl.Collator().compare(b.year, a.year)));
  }
}
