const searchInput = document.getElementById('search-input');
const tableRows = document.querySelectorAll('#my-table tbody tr');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  tableRows.forEach((row) => {
    const nameCell = row.cells[1];
    const name = nameCell.textContent.toLowerCase();
    if (searchTerm === '') {
      nameCell.classList.remove('highlight');
    } else if (name.includes(searchTerm)) {
      nameCell.classList.add('highlight');
    } else {
      nameCell.classList.remove('highlight');
    }
  });
});
