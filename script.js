'use strict';

var remote = require('remote');
var dialog = remote.require('dialog');
var fs = require('fs');
var ffi = require('ffi');
var dllPath = `${__dirname}\\screenCapture.dll`;
var dll = ffi.Library(dllPath, {
  'screenCapture': [ 'string', [ 'string' ] ]
});
var imgData = null;

var nodes = (() => {
  function $(selector) {
    return document.querySelector(selector);
  }

  function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  return {
    captureBtn: $('#capture-btn'),
    saveBtn: $('#save-btn'),
    outputImg: $('#output-img')
  };
})();

nodes.captureBtn.addEventListener('click', () => {
  imgData = dll.screenCapture('');
  nodes.outputImg.src = `data:image/png;base64,${imgData}`;
  nodes.saveBtn.disabled = false;
}, false);

nodes.saveBtn.addEventListener('click', () => {
  if (!imgData) return false;
  var buffer = new Buffer(imgData, 'base64');

  var dialogOptions = {
    title: 'Save screenshot as...',
    filters: [{ name: 'PNG', extensions: ['png'] }]
  };
  var imgPath = dialog.showSaveDialog(remote.getCurrentWindow(), dialogOptions);
  if (!imgPath) return false;

  fs.writeFile(imgPath, buffer, 'binary', (err) => {
    if (err) throw err;
  });
}, false);
