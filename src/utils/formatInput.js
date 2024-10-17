export const formatInputNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    return cleanedValue.replace(/(.{4})/g, "$1 ").trim();
  };