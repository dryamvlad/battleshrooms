const recursive = require('recursive-fs');
const FormData = require('form-data');
const basePathConverter = require('base-path-converter');
 
const src = './img_test/'
recursive.readdirr(src, function (err, dirs, files) {
    const body = new FormData();
    files.forEach((file) => {
        const filepath = path.normalize(file);
        body.append(`file`, fs.createReadStream(file), {
            filepath: basePathConverter(src, file)
        })
    });

    console.log(body);
});