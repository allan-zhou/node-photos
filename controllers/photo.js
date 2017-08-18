const formidable = require('formidable');
const appconfig = require('../config/appconfig');
const photoModel = require('../models/photo');
const qs = require('qs');

exports.form = (req, res) => {
  res.render('photo/upload', { title: 'Upload Photo' });
}

exports.submit = (req, res, next) => {
  var form = new formidable.IncomingForm();
  form.uploadDir = appconfig.uploadDir; // 设置上传目录
  form.keepExtensions = true; // 保持文件名后缀
  form.multiples = true; // 支持多文件上传

  form.parse(req, function (err, fields, files) {
    if (err) next(err);
    fields = qs.parse(fields);
    files = qs.parse(files);

    const arr = [];
    const filename = fields.photo.name || img.name;
    const desc = fields.photo.desc || '';
    if (Array.isArray(files.photo.image)) { //如果同时上传多个附件
      files.photo.image.forEach(function (image) {
        const pathname = image.path.split('\\').reverse().shift();
        arr.push({ name: filename, desc: desc, path: pathname });
      });
    } else {
      const pathname = files.photo.image.path.split('\\').reverse().shift();
      arr.push({ name: filename, desc: desc, path: pathname });
    }
    photoModel.insertMany(arr, (err, docs) => {
      if (err) next(err);
      console.log(docs);
    })
  });

  // form.on('progress', function(bytesReceived, bytesExpected) {
  //   console.log('--------------------progress');
  //   console.log('bytesReceived:'+ bytesReceived);
  //   console.log('bytesExpected:' + bytesExpected);
  // });

  form.on('end', function () {
    console.log('upload end');
    res.redirect('/')
  });

}

exports.list = (req, res, next) => {
  photoModel.find({}, (err, docs) => {
    if (err) next(err);
    res.render('index', { title: 'Photos', data: docs });
  });
}