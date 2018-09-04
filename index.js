function justInvoke(func) {
  return func();
}

function setThisWithCall(func, value, argument) {
  return func.call(value, argument);
}

function setThisWithApply(fn, thisValue, ourArguments) {
  return fn.apply(thisValue, ourArguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}