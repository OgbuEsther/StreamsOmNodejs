import events from "events";
import path from "path";
import fs, { existsSync } from "fs";
import fspromises from "fs/promises";
import { buffer } from "stream/consumers";

if (!fs.existsSync(path.join(__dirname, "newFolder"))) {
  fspromises.mkdir(path.join(__dirname, "newFolder"));
}

setInterval(() => {
  fspromises.appendFile(
    path.join(__dirname, "newFolder", "newFile.txt"),
    "my name is esther\t i am the best  \nmy name is uzoma too"
  );
});
