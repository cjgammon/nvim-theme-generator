export default `
/**
 * Demo file showcasing syntax highlighting
 * @param {string} input
 */
function demo(input) {
  // Variables and strings
  const str = "Hello World";
  let template = \`Value: \$\{input\}\`;

  // Objects and arrays
  const obj = { key: "value" };
  const arr = [1, "two", { three: 3 }];

  try {
    throw new Error("Sample error");
  } catch (err) {
    console.warn("Warning message");
    console.info("Info message");
  }

  return arr.map(x => \`\$\{x\}!\`);
}

// Class definition
class Example {
  constructor() {
    this.value = 42;
  }
}

demo("test");

{{Error}}
[[Warning]]
||Hint||
((Info))
`;
