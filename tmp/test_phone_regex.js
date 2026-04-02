
function validateNigerianPhone(phone) {
  // Strip spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Accepts 08XXXXXXXXX, 07XXXXXXXXX, 09XXXXXXXXX (11 digits)
  // Or +234XXXXXXXXXX (13 chars starting with +234 followed by 10 digits)
  const pattern = /^(0[789]\d{9}|\+234[789]\d{9})$/;
  return pattern.test(cleaned);
}

const testCases = [
  "08031234567",
  "0803 123 4567",
  "+2348031234567",
  "+234 803 123 4567",
  "0803-123-4567",
  "(0803) 123 4567",
  "08131234567",
  "09031234567",
  "07031234567",
  "07131234567", // Invalid prefix for Nigerian mobile (usually 070)
  "0801234567", // Too short
  "080312345678", // Too long
];

testCases.forEach(t => {
  console.log(`${t}: ${validateNigerianPhone(t)}`);
});
