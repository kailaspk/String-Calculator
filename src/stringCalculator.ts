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
    const numArray = tokens
      .map((t) => parseInt(t, 10))
      .filter((n) => !isNaN(n));

    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, n) => sum + n, 0);
  }
}
