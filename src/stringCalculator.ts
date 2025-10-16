export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    const parts = numbers.split(/,|\n/);

    const sum = parts.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    return sum;
  }
}
