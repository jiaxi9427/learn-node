const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else {
    console.log(data);
    // 确保在文件读取成功后删除文件
    fs.unlink("./operations/data.txt", (err) => {
      if (err) console.log(err.message);
      else console.log("File deleted successfully");
    });
  }
});