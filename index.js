let body = document.querySelector("body")
let headerOne = document.createElement("h1")
headerOne.innerText = "HTML CODES"
body.appendChild(headerOne)
let container = document.createElement("div")
container.setAttribute("class", "container")
let copyRight = document.createElement("div")
copyRight.setAttribute("class", "copy-right")
let copySpan = document.createElement("span")
let yearSpan = document.createElement("span")
copySpan.innerText = "All rights reserved " + unescape("%u00a9") + " Nibble" 
yearSpan.innerText = (new Date()).getFullYear()
copyRight.appendChild(copySpan)
copyRight.appendChild(yearSpan)

const headingNames = ["Character", "HTML Code", "Hex Code"]

const  tableContents = {
    regularHtmlCode: {
        minCode: 32,
        maxCode: 126,
        class: "regular-code",
        captionText: "Regular Html Codes and Basic Latin"
    },
    controlsAndLatinSupplement: {
        minCode: 160,
        maxCode: 255,
        class: "latin-supplement",
        captionText: "UTF-8 C1 Controls and Latin1 Supplement"
    },
    latinExtended: {
        minCode: 256,
        maxCode: 383,
        class: "latin-extended",
        captionText: "UTF-8 Latin Extended A"
    },
    latinExtendedExtra: {
        minCode: 384,
        maxCode: 591,
        class: "latin-extended-extra",
        captionText: "UTF-8 Latin Extended B"
    },
    spacingModifier: {
        minCode: 688,
        maxCode: 767,
        class: "spacing-modifier",
        captionText: "UTF-8 Spacing Modifier Letters"
    },
    diaCriticalMarks: {
        minCode: 768,
        maxCode: 879,
        class: "dia-critical-marks",
        captionText: "UTF-8 Diacritical Marks"
    },
    
    greekAlphabetLowerCase: {
        minCode: 945,
        maxCode: 969,
        class: "lower-case",
        captionText: "Lower case Greek Alphabet"   
    },
    greekAlphabetUpperCase: {
        minCode: 913,
        maxCode: 937,
        class: "upper-case",
        captionText: "Upper case Greek Alphabet"
    },
    greekAlphabetExtendedOne: {
        minCode: 880,
        maxCode: 887,
        class: "upper-and-lower-one",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    greekAlphabetExtendedTwo: {
        minCode: 890,
        maxCode: 894,
        class: "upper-and-lower-two",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    greekAlphabetExtendedThree: {
        minCode: 900,
        maxCode: 906,
        class: "upper-and-lower-three",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    greekAlphabetExtendedFour: {
        minCode: 908,
        maxCode: 908,
        class: "upper-and-lower-four",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    greekAlphabetExtendedFive: {
        minCode: 910,
        maxCode: 912,
        class: "upper-and-lower-five",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    greekAlphabetExtendedSix: {
        minCode: 970,
        maxCode: 993,
        class: "upper-and-lower-six",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    greekAlphabetExtendedSeven: {
        minCode: 1008,
        maxCode: 1023,
        class: "upper-and-lower-seven",
        captionText: "Upper and Lower case Greek Alphabets extended"
    },
    copticSymbols: {
        minCode: 994,
        maxCode: 1007,
        class: "coptic-symbols",
        captionText: "Coptic Symbols"
    },
    cyrillicCodes: {
        minCode: 1024,
        maxCode: 1279,
        class: "cyrillic-symbols",
        captionText: "UTF-8 Cyrillic"
    },
    cyrillicSupplementCodes: {
        minCode: 1280,
        maxCode: 1327,
        class: "cyrillic-supplement-symbols",
        captionText: "UTF-8 Cyrillic Supplement"
    },
    generalPunctuationCodes: {
        minCode: 8192,
        maxCode: 8303,
        class: "general-punctuation",
        captionText: "UTF-8 General Punctuation"
    },
    mathSymbolCode: {
        minCode: 8704,
        maxCode: 8959,
        class: "math-code",
        captionText: "UTF-8 Mathematical Symbols"
    },
    currencySymbolCode: {
        minCode: 8352,
        maxCode: 8383,
        class: "currency-code",
        captionText: "UTF-8 Currency Symbols"
    },
    letterLikeSymbolCode: {
        minCode: 8448,
        maxCode: 8527,
        class: "letter-like-code",
        captionText: "UTF-8 Letter-like Symbols"
    },
    arrowSymbolCode: {
        minCode: 8592,
        maxCode: 8703,
        class: "arrow-code",
        captionText: "UTF-8 Arrows"
    },
    boxDrawingsSymbolCode: {
        minCode: 9472,
        maxCode: 9599,
        class: "box-code",
        captionText: "UTF-8 Box Drawings"
    },
    blockElementsSymbolCode: {
        minCode: 9600,
        maxCode: 9631,
        class: "block-code",
        captionText: "UTF-8 Block Elements"
    },
    geometricShapesSymbolCode: {
        minCode: 9632,
        maxCode: 9727,
        class: "geometric-code",
        captionText: "UTF-8 Geometric Shapes"
    },
    dingBatShapesSymbolCode: {
        minCode: 9984,
        maxCode: 10175,
        class: "dingbat-code",
        captionText: "UTF-8 Dingbats"
    },
    miscellaneousCode: {
        minCode: 9728,
        maxCode: 9983,
        class: "misc-code",
        captionText: "UTF-8 Miscellaneous Symbols"
    }
}
   function menuCreator(tableObj){
       let menuContainer = document.createElement("div")
       menuContainer.setAttribute("class", "menu-container")
       let span = document.createElement("span")
       span.innerText = unescape("%u2630")
       menuContainer.appendChild(span)
       let list = document.createElement("ul")
       list.setAttribute("id", "hidden")
       list.setAttribute("class", "hidden")
       let values = Object.values(tableObj)
       for(let element of values){
           let listItem = document.createElement("li")
           let menuLink = document.createElement("a")
           menuLink.innerText = element.captionText
           menuLink.setAttribute("href", "#" + element.class)
           listItem.appendChild(menuLink)
           list.appendChild(listItem)
       }
      menuContainer.appendChild(list)
      return menuContainer
   }
   

   //Creates Table caption and headings
    function captionAndHeader(captionText, headerNamesArray){
         let caption = document.createElement("caption")
         caption.setAttribute("class", "caption")
         caption.innerText = captionText
         let headerRow = document.createElement("tr")
        for(let  k = 0; k < 3; k++){
            let tableHeader = document.createElement("th")
            tableHeader.innerText = headerNamesArray[k]
            headerRow.appendChild(tableHeader)
           
        }
        return [caption, headerRow]
    }
    //Formats character codes in HTML, UTF-8 and Hex
    function  characterCodeFormatter(numericChar){
        let strChar = numericChar.toString(16) //In Hexadecimal
        while(strChar.length < 4){
            strChar = "0"+ strChar
        }
        return ["%u" + strChar, "&#" + numericChar + ";", "\\u" + strChar]
    }
    //Creates different Tables and contents
    function tableFactory(min, max, containerClass, captionContent, namesOfHeadings){
         let div = document.createElement("div")
         div.setAttribute("class", containerClass)
         div.setAttribute("id", containerClass)
         let table = document.createElement("table")
         const[caption, headerRow] = captionAndHeader(captionContent, namesOfHeadings)
         table.appendChild(caption)
         table.appendChild(headerRow)
         for(let i = min; i <= max; i++){
            let tableRow = document.createElement("tr")
            let formatCharacterArray = characterCodeFormatter(i)
            for(let j = 0; j < 3; j++){
                let tableData = document.createElement("td")
                switch(j){
                    case 0:
                        tableData.innerText = unescape(formatCharacterArray[0])
                        break
                    case 1:
                        tableData.innerText = formatCharacterArray[1]
                        break
                    case 2:
                        tableData.innerText = formatCharacterArray[2]
                        break
                }
                tableRow.appendChild(tableData)
            }
            table.appendChild(tableRow) 
         }
         div.appendChild(table)
         return div
    }

    //Constructs and appends tables to the container
  function tableAppender(container, tableObj){
      let property = Object.keys(tableObj)
      for(const element of property ){
          //Creating and populating table cells
          let table = tableFactory( tableObj[element].minCode,  
                                    tableObj[element].maxCode,
                                    tableObj[element].class,
                                    tableObj[element].captionText,
                                    headingNames
                                    )
         container.appendChild(table)
      }
      return container
  }
body.appendChild(menuCreator(tableContents))
body.appendChild(tableAppender(container, tableContents))
body.appendChild(copyRight)
let menu = document.querySelector("#hidden")
let hamContainer = document.querySelector(".menu-container")
let hamMenuSymbol = document.querySelector(".menu-container span")

hamContainer.addEventListener("click", () => {
            if(menu.getAttribute("class") === "hidden"){
                 menu.setAttribute("class", "show")
                 hamMenuSymbol.innerText = unescape("%u2613")
            }else{
                 menu.setAttribute("class", "hidden")
                 hamMenuSymbol.innerText = unescape("%u2630")
            }
    
})
menu.forEach(element => {
    element.addEventListener("click", () => {
        if(menu.getAttribute("class") === "hidden"){
            menu.setAttribute("class", "show")
       }else{
            menu.setAttribute("class", "hidden")
       }
    })
});
