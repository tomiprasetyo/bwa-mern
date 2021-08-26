// const formatNumber = (number) => {
//   const formatNumber = new Intl.NumberFormat("id-ID");
//   return formatNumber.format(number);
// };

// export default formatNumber;

const formatNumber = (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};

export default formatNumber;
