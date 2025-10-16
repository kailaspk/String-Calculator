export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const delimiterPart = parts[0].substring(2);
      delimiter = new RegExp(delimiterPart);
      numbers = parts[1];
    }

    const tokens = numbers.split(delimiter);
    const sum = tokens.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    return sum;
  }
}
