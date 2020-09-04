const {shell} = require('electron')
const os = require('os')

const printer = require('pdf-to-printer')
const fileManagerBtn = document.getElementById('open-file-manager')

fileManagerBtn.addEventListener('click', (event) => {
  shell.showItemInFolder(os.homedir())
})

const printBtn = document.getElementById('print-file')
const downloadBtn = document.getElementById('download-file')

downloadBtn.addEventListener('click', (event) => {
  require("electron").remote.require("electron-download-manager").download({
    url: "https://dummyimage.com/600x400/000/fff"
  }, function (error, info) {
    if (error) {
      console.log(error);
      return;
    }

    console.log("DONE: " + info.url);
  });
})

printBtn.addEventListener('click', (event) => {

  printer
  .print("assets/dummy.pdf")
  .then(console.log)
  .catch(console.error);

})


