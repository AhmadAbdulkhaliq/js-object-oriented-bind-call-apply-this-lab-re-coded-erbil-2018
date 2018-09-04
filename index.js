function justInvoke(func) {
  return func();
}

function setThisWithCall(func, value, argument) {
  return func.call(value, argument);
}

function setThisWithApply(func, value, arguments) {
  return func.apply(value, argument);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}