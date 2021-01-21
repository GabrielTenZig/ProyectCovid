const { translate } = require("./apiCovid")

const translateCountryNameToEnglish = async (nameCountryInSpanish) => {
    // curl -X POST 
    // "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=zh-Hans"
    // -H 
    // "Ocp-Apim-Subscription-Key: b7f3307b87834850ab9866004b7801ea" 
    // -H 
    // "Content-Type: application/json; charset=UTF-8" 
    // -d 
    // "[{'Text':'Hello, what is your name?'}]"
    
    if (!nameCountryInSpanish) return undefined

    const endpoint = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=es&to=en"
    // const textToTranslate = "[{'Text':'Hello, what is your name?'}]"
    const data = undefined

    try {
        const res = await (enpoint,{
            headers: {
                "Ocp-Apim-Subscription-Key": "b7f3307b87834850ab9866004b7801ea",
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: [
                {"Text": `${nameCountryInSpanish}`}
            ]
        })
    
        if (res.ok) {
            data = res.json()
        } else {
            throw new Error(res.status)
        }
    } catch (err) {
        console.error("Error in function translateCountryNameToEnglish: ", err)
    }

    return data
}

console.log("Suiza en ingles se escribe: ",translateCountryNameToEnglish('suiza'));