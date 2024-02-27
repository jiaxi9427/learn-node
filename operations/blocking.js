const fs = require("fs");

function moreWork() {
    console.log('more work');
}

try {
    const data = fs.readFileSync("data/test.txt"); // blocks here until file is read
    console.log(data);
    moreWork();
}
catch(err) {
    console.log(err.message);
}
// For this piece of code, we'll print data and then we'll print 'more work'.
