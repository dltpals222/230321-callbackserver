function one (first, second, callback) {
  let addResult = first + second;
  return callback(addResult);
}

const onecallback = one(1,2,function(result){
  let callbackResult = result * 2;
  return callbackResult;
})

console.log(onecallback);