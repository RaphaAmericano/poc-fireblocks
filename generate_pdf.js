const fs = require("fs")
const PDFDocument = require("pdfkit")
const puppeteer = require("puppeteer")

async function generateRecipt(data){
    // const { nome, valor, fee, hash, date } = data;
    // const doc = new PDFDocument();
    const now = Date.now()

    const html = await fs.readFileSync("comprovante_rib.html", "utf8")
    console.log(html)

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(html)
    await page.pdf({ path: "comprovante_rib.pdf", format: "a4"})
    await browser.close()


    // doc.pipe(fs.createWriteStream(`Comprovante_Flowin_.pdf`))

    // doc.addPage().text("text")

    // doc.end()



}

( async () => {
    await generateRecipt()
})()
