const alpha = [
  "ا",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
];

export function getAlpha(txt) {
  const arr = txt
    .replace(/\s/g, "")
    .replace(/ة/g, "ه")
    .replace(/[أإآءؤئ]/g, "ا")
    .split("");
  console.log(arr);
  for (const r of arr) {
    if (!alpha.includes(r)) {
      console.log(r);
      return "";
    }
  }
  return arr.join("");
}
