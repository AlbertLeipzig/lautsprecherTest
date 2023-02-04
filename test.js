const newDate = new Date();

const formattedDate = newDate.toLocaleDateString('de', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

console.log(formattedDate);
