export const priceUz = (num) => {
  return new Intl.NumberFormat("uz-UZ", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};
