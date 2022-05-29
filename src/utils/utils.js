function changeDateFormat(inputDate, format) {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  format = format.replace('MM', month.toString().padStart(2, '0'));

  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString());
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2));
  }

  format = format.replace('dd', day.toString().padStart(2, '0'));

  return format;
}

export { changeDateFormat };
