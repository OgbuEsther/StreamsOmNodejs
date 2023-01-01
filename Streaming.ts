import fs, { write } from "fs";
import { buffer } from "stream/consumers";

const reading = async () => {
  const readstream = fs.createReadStream("./newFolder/newFile.txt", {
    highWaterMark: 100,
  });
  const writestream = fs.createWriteStream("./newFolder/newer.txt");

  readstream.on("data", (buffer) => {
    console.log("reading the data");
    console.log(buffer.toString());
    writestream.write(buffer);
  });

  readstream.on("end", () => {
    console.log("read sucessful");
    writestream.end("writing sucessful ....!!!");
  });
};
reading();
