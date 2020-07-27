/* eslint-disable comma-dangle */
const incomeData = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: '9.30',
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: '9.20',
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: '9.00',
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: '9.00',
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: '8.90',
    year: 1994,
  },
];

// функция создания таблицы из приходящих данных с формированием шапки
export default function initTable(data) {
  const table = document.querySelector('.data-table');
  table.textContent = ''; // очищаем таблицу
  // собираем таблицу из приходящих данных
  for (let i = 0; i < data.length; i += 1) {
    const row = table.insertRow();
    for (const prop in data[i]) {
      // eslint ругается на использование for..in без проверки наличия свойства, поэтому if
      if (prop) {
        row.setAttribute(`data-${prop}`, `${data[i][prop]}`);
        const cell = row.insertCell();
        cell.classList.add('cell');
        const cellText = document.createTextNode(data[i][prop]);
        cell.appendChild(cellText);
      }
    }
  }

  // создаем шапку таблицы
  const thead = table.createTHead();
  const headRow = thead.insertRow();

  for (let i = 0; i < Object.keys(data[0]).length; i += 1) {
    const th = document.createElement('th');
    th.classList.add(Object.keys(data[0])[i], 'cell');
    const thTitle = document.createTextNode(Object.keys(data[0])[i]);
    th.appendChild(thTitle);
    headRow.appendChild(th);
  }
}

// инициализируем таблицу
initTable(incomeData);
