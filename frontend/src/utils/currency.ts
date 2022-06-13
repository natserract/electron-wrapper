export function toRupiah(price: number, prefix = '.') {
  if (!price) return price;

  const p = price.toFixed(2).split('.');
  const currency = 'Rp';

  return (
    currency +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, int, i) {
        return int + (int !== '-' && i && !(i % 3) ? prefix : '') + acc;
      }, '')
  );
}