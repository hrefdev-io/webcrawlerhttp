const { crawlPage } = require("./crawl.js");

async function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many command line args");
    process.exit(1);
  }
  // process.argv.forEach((arg) => console.log(arg));
  const baseURL = process.argv[2];

  console.log(`starting crawl ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});

  for (const page in pages) {
    console.log(page);
  }
}
main();
