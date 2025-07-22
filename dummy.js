function printArgs() {
  let args = Array.from(arguments);
  console.log(Array.isArray(args));
  console.log(args.map(x => x * 2));
}
printArgs(5, 10);