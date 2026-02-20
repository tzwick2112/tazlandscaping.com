export default function splitAddress(address: string): [string, string] {
  const regex = /, ([^,]+), ([^,]+)$/;

  const match = address.match(regex);
  if (!match) {
    throw new Error("Invalid address format.");
  }

  const cityStateZip = match[0].slice(2).trim();

  const street = address.slice(0, address.lastIndexOf("," + match[0])).trim();

  return [street, cityStateZip];
}
