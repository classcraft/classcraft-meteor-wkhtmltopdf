This is a wrapper around the NPM package `wkhtmltopdf-selfcontained`, version 0.1.5. 

It allows you to create PDFs from HTML, without installing external binaries. 

Docs for that are here : https://www.npmjs.com/package/wkhtmltopdf.

Disclaimer : Compared to V0.1.5, this version uses a static binary of wkhtmltopdf V0.9.9. We changed it so you can use the package out-of-the box without installing any binaries on the server. If you had a custom installation of wkhtmltopdf or a later version, you may want to refrain from updating. 

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