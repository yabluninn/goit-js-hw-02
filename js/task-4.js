function getShippingCost(country) {
  let cost = 0;
  switch (country) {
    case "China":
      cost = 100;
      break;
    case "Chile":
      cost = 250;
      break;
    case "Jamaica":
      cost = 120;
      break;
    case "Australia":
      cost = 170;
      break;
    default:
      cost = 0;
      break;
  }

  if (cost > 0) {
    return `Shipping to ${country} will cost ${cost} credits`;
  } else {
    return `Sorry, there is no delivery to your country`;
  }
}

console.log("Logs for Task 4:");

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
