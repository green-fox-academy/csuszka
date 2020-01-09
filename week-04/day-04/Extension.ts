'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (c > b && c > a) {
    return c;
  }
  else {
    return b;
  }
};

export function median(p: number[]): number {
  let pool = [...p];
  pool.sort();
  if (pool.length % 2) {
    return pool[Math.floor(pool.length / 2)];
  } else {
    return (pool[pool.length / 2] + pool[pool.length / 2 - 1]) / 2;
  }
}

export function isVowel(character: string): boolean {
  return character === 'a' || character === 'u' || character === 'o' || character === 'e' || character === 'i';
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}