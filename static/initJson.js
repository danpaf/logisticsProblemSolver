document.addEventListener('DOMContentLoaded', function() {
const table = document.getElementById("tableBox");

// Создание заголовков столбцов таблицы
const headers = ["Вес", "Длина", "Откуда", "Куда", "Маршрут", "Тип загрузки", "Начальная дата", "Конечная дата", ""];
const headerRow = document.createElement("tr");

for (let header of headers) {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
}

table.appendChild(headerRow);

// Чтение данных из API
fetch("http://127.0.0.1:8000/cycles")
  .then(response => response.json())
  .then(data => {
      // Создание строк таблицы
      for (let item of data) {
          const row = document.createElement("tr");

          // Вес
          const weightCell = document.createElement("td");
          weightCell.textContent = item.weight;
          row.appendChild(weightCell);

          // Длина
          const lengthCell = document.createElement("td");
          lengthCell.textContent = item.len;
          row.appendChild(lengthCell);

          // Откуда
          const fromCell = document.createElement("td");
          fromCell.textContent = item.from;
          row.appendChild(fromCell);

          // Куда
          const toCell = document.createElement("td");
          toCell.textContent = item.to;
          row.appendChild(toCell);

          // Маршрут
          const routeCell = document.createElement("td");
          routeCell.textContent = item.cycle.join(", ");
          row.appendChild(routeCell);

          // Тип загрузки
          const loadingTypeCell = document.createElement("td");
          loadingTypeCell.textContent = item.edge_type;
          row.appendChild(loadingTypeCell);

          // Начальная дата
          const startDateCell = document.createElement("td");
          startDateCell.textContent = item.start_date;
          row.appendChild(startDateCell);

          // Конечная дата
          const endDateCell = document.createElement("td");
          endDateCell.textContent = item.end_date;
          row.appendChild(endDateCell);

          // Кнопка "Предложить цену"
          const priceCell = document.createElement("td");
          const priceButton = document.createElement("button");
          priceButton.textContent = "Предложить цену";
          priceCell.appendChild(priceButton);
          row.appendChild(priceCell);

          table.appendChild(row);

          // Отображаем количество строк в таблице
          const countDiv = document.getElementById("count");
          const rowCount = table.rows.length;
          countDiv.innerHTML = `DEBUG: Количество строк: ${rowCount}`;
        }
      })
      .catch(error => console.error(error));
});



