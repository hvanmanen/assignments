function assert(expectedValue, realValue) {
  if (expectedValue.toString() === realValue.toString()) {
    put("OK: " + expectedValue + " === " + realValue, true);
  } else {
    put("ERROR: " + expectedValue + " !== " + realValue, true);
  }
}

var orderNumber = 0;

function put(text, useOrder) {
  if (useOrder) {
    orderNumber++;
    console.log("TEST " + orderNumber + ")", text);
  } else {
    console.log(text);
  }
}

