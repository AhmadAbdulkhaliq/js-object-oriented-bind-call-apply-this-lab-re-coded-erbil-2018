function justInvoke(func) {
  return func();
}

function setThisWithCall(func, value, argument) {
  return func.call(value, argument);
}

function setThisWithApply(func, value, argument) {
  return func.apply(value, argument);
}

function returnNewFunctionOf(copyFunc, value) {
  const copyFunc = copyFunc.bind(value);
  return copy;
}