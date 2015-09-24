This is a wrapper around the NPM package `wkhtmltopdf`, version 0.1.5. 

It allows you to create PDFs from HTML, but you need to install external binaries. Docs for `wkhtmltopdf` are here : https://www.npmjs.com/package/wkhtmltopdf.

## Installation
`meteor add classcraft:meteor-wkhtmltopdf`

## Usage
On the server, you have access to a global variable `wkhtmltopdf`, which you can use like this : 

    var pdfStream = wkhtmltopdf(html, options);

This allows you to write PDFs doing something like this : 

    generatePDF = function(html, options) {
        wkhtmltopdf(html, function(code, signal) {
            console.log('worked!', fs.readFileSync('out.pdf').toString());
        }).pipe(fs.createWriteStream('out.pdf'));
    }