"use strict";

const runPrettier = require("../runPrettier.js");

expect.addSnapshotSerializer(require("../path-serializer.js"));

describe("ignores file name contains emoji", () => {
  runPrettier("cli/ignore-emoji", ["**/*.js", "-l"]).test({
    status: 1,
  });
});

describe("stdin", () => {
  runPrettier(
    "cli/ignore-emoji",
    ["--stdin-filepath", "ignored/我的样式.css"],
    { input: ".name {                         display: none; }" }
  ).test({
    status: 0,
  });
});
