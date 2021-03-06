"use strict";

const runPrettier = require("../runPrettier.js");

expect.addSnapshotSerializer(require("../path-serializer.js"));

describe("ignores files in version control systems", () => {
  runPrettier("cli/ignore-vcs-files", [
    ".svn/file.js",
    ".hg/file.js",
    "file.js",
    "-l",
  ]).test({
    status: 1,
  });
});
