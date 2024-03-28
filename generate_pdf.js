const fs = require("fs")
const path = require("path")
const puppeteer = require("puppeteer")

function replaceTags(html, data){
    return html.replace(/\{([^{}]+)\}/g, function(match, tag){
        return data[tag.trim()] || match
    })
}

const properties = {
    nome: "João",
    valor: "10",
    fee: "0.2",
    hash:"dsahduhsahushudas",
    date: "10/10/2024"
}

async function generateRecipt(data, htmlPath, pdfName, filePath = "./" ){
    const finalPath = path.resolve(filePath, pdfName)
    const fileUrl = `file://${htmlPath}`
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(fileUrl, { waitUntil: "networkidle0" } )
    await page.evaluate((data) => {
        const keys = Object.keys(data)
        const labels = document.querySelectorAll("label")
        for(const key of keys ){
            const value = data[key]
            console.log(value)
            for(const label of labels ){
                label.innerText = label.innerText.replace(`{${key}}`, value)
            }
        }
    }, data)
    await page.pdf({ path: finalPath, format: "a4"})
    await browser.close()
    return finalPath
}

( async () => {
    const now = Date.now()
    
    const data = {
        nome: '0x4200617d7520be267e68b735cecc1c2fcf69c7d5',
        valor: '10.00000000',
        fee: '0.00144150',
        hash: '0xfec2e37a46368bcc767e06a30a10e0da78ee0a32c609338e754e2216ac32f488',
        date: '26/03/2024 15:46:24',
        // logoImage: `data:image/png;base64;${logoImage.toString("base64").replace(/^data:image\/png;base64,/, '')}`
    }
    // const html = await fs.readFileSync(path.join(__dirname, "templates/comprovante_rib.html"), "utf8")

    // const filePath = process.env.FLOW_BASE_URL !== undefined ? `${process.env.FLOW_BASE_URL}/${pdfName}` : path.join(__dirname, pdfName)
    const htmlPath = path.resolve(__dirname, "templates", "comprovante_rib.html" )
    const filePath = "./"
    const pathResult = await generateRecipt(data, htmlPath, `comprovante_${now}.pdf`, filePath,)
    console.log("pathResult", pathResult)
})()
