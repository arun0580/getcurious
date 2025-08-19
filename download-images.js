import fs from "fs";
import path from "path";
import axios from "axios";

const projectDir = "./"; // root of your exported project
const downloadDir = "./images";

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

// 1. Recursively scan all files in the project
function getAllFiles(dir, extList, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, extList, fileList);
    } else if (extList.includes(path.extname(fullPath))) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

// Extensions we want to scan
const exts = [".html", ".css", ".js", ".jsx"];
const filesToScan = getAllFiles(projectDir, exts);

console.log(`Scanning ${filesToScan.length} files...`);

// 2. Extract image URLs
let urls = new Set();

filesToScan.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const regex = /https:\/\/c\.animaapp\.com\/11hWkBJI\/img\/[^\s"')]+/g;
  const matches = content.match(regex);
  if (matches) {
    matches.forEach((m) => urls.add(m));
  }
});

urls = [...urls];
console.log(`Found ${urls.length} unique images.`);

// 3. Download function
async function downloadImage(url, filepath) {
  const writer = fs.createWriteStream(filepath);
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

// 4. Run downloader
async function run() {
  for (const url of urls) {
    const filename = url.split("/").pop();
    console.log(`Downloading ${filename}...`);
    await downloadImage(url, path.join(downloadDir, filename));
  }
  console.log("✅ All images downloaded!");
}

run().catch(console.error);
