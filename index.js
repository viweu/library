function formatDate(date, format = 'YYYY-MM-DD') {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  }
  
  
  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }
  
  module.exports = {
    formatDate,
    addDays,
  };