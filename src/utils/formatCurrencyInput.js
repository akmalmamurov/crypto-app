export const formatCurrencyInput = (value) => {
  const numericValue = value.toString().replace(/\D/g, "");
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formattedValue}`.trim();
};
