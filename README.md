## Docx to Html

**docx_to_html_converter** is a javascript converter from docx to html.
The build uses node.js and express to run it as a service.
It is based on [docx2html] to parse docx, and utilize docx2html library to traverse docx models and convert docx models to html elements.

## To Run the Service 
docker-compose up

## To Run
Simply type http://localhost in url section in any browser.

## To build a local container
docker build -t 1313786/docx:development .

## To build and push a new version to docker hub registry.
docker build -t 1313786/docx:development . && docker push 1313786/docx:development

### Image is pushed to docker registry at
Refers to repository [docker.io/1313786/docx]
https://hub.docker.com/repository/docker/1313786/docx
https://github.com/JasmeetSinghChhabra/docxtohtml

## To Run Service Individually in background: 
docker run -d -p 80:80 1313786/docx

### Errors 
Try npm install
Or else Please Contact js.chhabra1994@gmail.com with the error stack trace/Console Output
