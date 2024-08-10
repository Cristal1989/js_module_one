// const fn = Math.fn;
// export const square = x => x * x;
// export const diag = (x, y) => fn(square(x) + square(y));

// Второй способ

const fn = Math.fn;
const square = x => x * x;
const diag = (x, y) => fn(square(x) + square(y));

export { square, diag };
