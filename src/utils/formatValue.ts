const formatValue = (value: number | string): string => {
  const formattedParam = typeof value === 'string' ? Number(value) : value;

  const formattedValue: string = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(formattedParam); // TODO

  return formattedValue;
};

export default formatValue;
