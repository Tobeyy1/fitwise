export function numberToWords(num: number): string {
  const units: string[] = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens: string[] = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens: string[] = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (num === 0) {
    return "Zero";
  }

  function convertBelowThousand(n: number): string {
    if (n === 0) {
      return "";
    } else if (n < 10) {
      return units[n];
    } else if (n < 20) {
      return teens[n - 10];
    } else if (n < 100) {
      return tens[Math.floor(n / 10)] + convertBelowThousand(n % 10);
    } else {
      return (
        units[Math.floor(n / 100)] + " Hundred" + convertBelowThousand(n % 100)
      );
    }
  }

  const billion = Math.floor(num / 1000000000);
  const million = Math.floor((num % 1000000000) / 1000000);
  const thousand = Math.floor((num % 1000000) / 1000);
  const remainder = num % 1000;

  let result = "";

  if (billion > 0) {
    result += convertBelowThousand(billion) + " Billion ";
  }

  if (million > 0) {
    result += convertBelowThousand(million) + " Million ";
  }

  if (thousand > 0) {
    result += convertBelowThousand(thousand) + " Thousand ";
  }

  if (remainder > 0) {
    result += convertBelowThousand(remainder);
  }

  return result.trim();
}
