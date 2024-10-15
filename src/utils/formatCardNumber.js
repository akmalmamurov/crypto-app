export const formatCardNumber = (card) => {
  return `${card.slice(0, 4)} ${card.slice(4, 6)}** **** **${card.slice(-2)}`;
};
