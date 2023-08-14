const clickableButtons = document.querySelectorAll('.clickable-buttons')
const container = document.querySelector('#container')
let finalNumberInput = document.querySelector('#final-number-input')
const howIsItDoneP = document.querySelector('#how-it-is-done-p')
let positiveOrNegative = true
let numOfDecimals = 2
const historyOfCalculationsArr = ['', '', '']
let indexForCalculations = 0



clickableButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (finalNumberInput.value === '0') {
            finalNumberInput.value = ''
        }
        setTimeout(() => {
            button.style.backgroundColor = 'gainsboro'
        }, 50);
        setTimeout(() => {
            if (button.id === 'button-equal')
                button.style.backgroundColor = 'royalBlue'
            else
                button.style.backgroundColor = 'white'
        }, 75);
        if (button.id === 'button-one') {
            finalNumberInput.value += '1' 
        }
        else if (button.id === 'button-two') {
            finalNumberInput.value += '2'
        }
        else if (button.id === 'button-three') {
            finalNumberInput.value += '3'
        }
        else if (button.id === 'button-four') {
            finalNumberInput.value += '4'
        }
        else if (button.id === 'button-five') {
            finalNumberInput.value += '5'
        }
        else if (button.id === 'button-six') {
            finalNumberInput.value += '6'
        }
        else if (button.id === 'button-seven') {
            finalNumberInput.value += '7'
        }
        else if (button.id === 'button-eight') {
            finalNumberInput.value += '8'
        }
        else if (button.id === 'button-nine') {
            finalNumberInput.value += '9'
        }
        else if (button.id === 'button-open-parentheses') {
            finalNumberInput.value += '('
        }
        else if (button.id === 'button-closed-parentheses') {
            finalNumberInput.value += ')'
        }
        else if (button.id === 'button-divide') {
            finalNumberInput.value += '/'
        }
        else if (button.id === 'button-multiply') {
            finalNumberInput.value += '*'
        }
        else if (button.id === 'button-add') {
            finalNumberInput.value += '+'
        }
        else if (button.id === 'button-substract') {
            finalNumberInput.value += '-'
        }
        else if (button.id === 'button-module') {
            finalNumberInput.value += '%'
        }
        else if (button.id === 'button-dot') {
            finalNumberInput.value += '.'
        }
        else if (button.id === 'button-power') {
            finalNumberInput.value += '^'
        }
        else if (button.id === 'button-square-root') {
            finalNumberInput.value += '√'
        }
        else if (button.id === 'button-positive-or-negative') {
            if (positiveOrNegative)
                finalNumberInput.value = '-' + finalNumberInput.value
            else
                finalNumberInput.value = finalNumberInput.value.split('').slice(1).join('')

            positiveOrNegative = !positiveOrNegative
        }
        else if (button.id === 'button-zero' && finalNumberInput.value !== '0' && finalNumberInput.value !== '0') { 
            finalNumberInput.value += '0'
        }
        else if (button.id === 'button-clear' && finalNumberInput.value !== '0') { 
            finalNumberInput.value = '0'
        }
        else if (button.id === 'button-delete' && finalNumberInput.value !== '0') { 
            finalNumberInput.value = finalNumberInput.value.split('').slice(0, finalNumberInput.value.length - 1).join('')
        }
        else if (button.id === 'button-clear' && finalNumberInput.value !== '0') { 
            finalNumberInput.value = '0'
        }
        else if (button.id === 'button-equal') {
            finalNumberInput.value = kalkulator(finalNumberInput.value, howManyDecimals.textContent)
            if (finalNumberInput.value === '0' || isNaN(finalNumberInput.value)) finalNumberInput.value = '0'
        }
    })
})

const addDecimalsButton = document.querySelector('#add-decimals-button')
const substractDecimalsButton = document.querySelector('#substract-decimals-button')
const howManyDecimals = document.querySelector('#how-many-decimals-span')

addDecimalsButton.addEventListener('click', () => {
    if (howManyDecimals.textContent < 10)
        howManyDecimals.textContent++
})
substractDecimalsButton.addEventListener('click', () => {
    if (howManyDecimals.textContent > 0)
        howManyDecimals.textContent--
})

const settingsButton = document.querySelector('#settings-button')
const settingsButtonDiv = document.querySelector('#settings-button-div')
const slideDiv = document.querySelector('#slide-div')
const buttonFontAwesome = document.querySelector('#button-font-awesome')
slideDiv.style.display = 'none'
settingsButton.addEventListener('click', () => {
    buttonFontAwesome.style.fontSize = '20px'
    if (slideDiv.style.display === 'none') {
        slideDiv.style.display = 'block'
        container.style.transform = 'translate(0, -6.6%)'
        buttonFontAwesome.classList.remove('fa-arrows-up-to-line')
        buttonFontAwesome.classList.add('fa-arrows-down-to-line')
       
    }
    else {
        slideDiv.style.display = 'none'
        container.style.transform = 'translate(0, 10%)' 
        buttonFontAwesome.classList.remove('fa-arrows-down-to-line')
        buttonFontAwesome.classList.add('fa-arrows-up-to-line')
    }
})
settingsButton.addEventListener('mouseover', () => {
    settingsButton.style.backgroundColor = 'rgb(184, 255, 255)'
})
settingsButton.addEventListener('mouseout', () => {
    settingsButton.style.backgroundColor = 'lightcyan'
})

function srediIzraz(nesrednjenIzraz) {

    let izrazBezSpaceIDuplihZagrada = nesrednjenIzraz.replace(/\s+/g, '').replace(/\(\)/g, '').replace(/(\d+)(√)/, '$1*$2')
    let izrazSaPodesenimPlusomIMinusom = izrazBezSpaceIDuplihZagrada.replace(/\-{2}/g, '+').replace(/\++/g, '+').replace(/\+\-|\-\+/g, '-').replace(/\,/, '.')
    let izrazBezMnozenjeDijeljenjePlus = izrazSaPodesenimPlusomIMinusom.replace(/([*/])\+(\d)/g, '$1$2').replace(/\*+/g, '*').replace(/\/+/g, '/')
    let izrazSaUbacenimMnozenjem = izrazBezMnozenjeDijeljenjePlus.replace(/(\d+)(\()/g, '$1*$2').replace(/(\))(\()/, '$1*$2')
    let srednjenIzraz = izrazSaUbacenimMnozenjem.split(/(\-?\d+\.\d+|\-?\d+|\(|\)|sqrt|pow|\^|√)/)
    srednjenIzraz.unshift('(')
    srednjenIzraz.push(')')
    srednjenIzraz = srednjenIzraz.filter(elem => elem !== '')

    console.log(srednjenIzraz)

    return srednjenIzraz
}

function srediOperaciju(nizZaOperaciju, simbol) {

    console.log(simbol)
    while (nizZaOperaciju.includes(simbol)) {
        if (nizZaOperaciju.indexOf('√') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('√')
            nizZaOperaciju.splice(indexSimbola, 2, Math.sqrt(Number(nizZaOperaciju[indexSimbola + 1])))
        }
        else if (nizZaOperaciju.indexOf('pow') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('pow')
            nizZaOperaciju.splice(indexSimbola, 2, Number(nizZaOperaciju[indexSimbola + 1]) * Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('/') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('/')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) / Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('^') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('^')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Math.pow(nizZaOperaciju[indexSimbola - 1], nizZaOperaciju[indexSimbola +1]))
        }
        else if (nizZaOperaciju.indexOf('%') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('%')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) % Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('*') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('*')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) * Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('-') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('-')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) - Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('+') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('+')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) + Number(nizZaOperaciju[indexSimbola + 1]))
        }
    }
}

const kalkulator = (izraz, izracunajBrojDecimala = 2, procesRada = 'yes') => {

    howIsItDoneP.textContent = izraz

    let konacanIzraz = srediIzraz(izraz)

    let nizOtvorenihIZatvorenihZagrada = konacanIzraz.filter(zagrada => zagrada === '(' || zagrada === ')')
    let nizOtvernihZagrada = []
    let indexZatvoreneZagrade = konacanIzraz.indexOf(')')
    let brojDecimala = 1

    for (let i = 0; i < nizOtvorenihIZatvorenihZagrada.length; i++) {
        if (nizOtvorenihIZatvorenihZagrada[i] === '(') {
            nizOtvernihZagrada.push('(') 
        }
        else if (nizOtvernihZagrada.pop() !== '(') {
            console.log('Zagrade nisu balansirane')
            return 0 
        }
    }
    
    for (let i = 0; i < izracunajBrojDecimala; i++) {
        brojDecimala *= 10
    }
    
    if (nizOtvernihZagrada.length > 0) {
        console.log('Zagrade nisu balansirane') 
        return 0
    }

    for (let indexOtvoreneZagrade = indexZatvoreneZagrade; indexOtvoreneZagrade >= 0; indexOtvoreneZagrade--) {
        let dioIzraza = []
            if (konacanIzraz[indexOtvoreneZagrade] === '(') {
                konacanIzraz.splice(indexOtvoreneZagrade, 1)
                konacanIzraz.splice(indexZatvoreneZagrade - 1, 1)
                dioIzraza = konacanIzraz.splice(indexOtvoreneZagrade, indexZatvoreneZagrade - indexOtvoreneZagrade - 1)
                for (let indexDijelaIzraza = 0; indexDijelaIzraza < dioIzraza.length; indexDijelaIzraza++) {
                    if (dioIzraza[indexDijelaIzraza] === '√' || dioIzraza[indexDijelaIzraza] === 'pow' || dioIzraza[indexDijelaIzraza] === '^') {
                        srediOperaciju(dioIzraza, dioIzraza[indexDijelaIzraza])
                        indexDijelaIzraza = 0
                    }
                    else if (dioIzraza[indexDijelaIzraza] === '*' || dioIzraza[indexDijelaIzraza] === '/' || dioIzraza[indexDijelaIzraza] === '%') {
                        srediOperaciju(dioIzraza, dioIzraza[indexDijelaIzraza])
                        indexDijelaIzraza = 0
                    }
                    else if (dioIzraza[indexDijelaIzraza] === '+' || dioIzraza[indexDijelaIzraza] === '-') {
                        srediOperaciju(dioIzraza, dioIzraza[indexDijelaIzraza])
                        indexDijelaIzraza = 0
                    }
                }
                konacanIzraz.splice(indexOtvoreneZagrade, 0, dioIzraza.reduce((sum, elem) => sum + Number(elem), 0))
                indexZatvoreneZagrade = konacanIzraz.indexOf(')')
                indexOtvoreneZagrade = indexZatvoreneZagrade

                if (procesRada === 'yes' && konacanIzraz.length > 1) {
                    howIsItDoneP.textContent += ' = ' + konacanIzraz.join('')
                }
                else if (procesRada === 'yes' && konacanIzraz.length < 2) {
                    howIsItDoneP.textContent += ' = ' + Math.round(konacanIzraz.join('') * brojDecimala) / brojDecimala
                }
                console.log('= ', Math.round(konacanIzraz.join('') * brojDecimala) / brojDecimala)

        } 
    }

    // const calculationsP = document.querySelectorAll('.calculations-p')
    // calculationsP[2].innerText = calculationsP[1].innerText
    // calculationsP[1].innerText = calculationsP[0].innerText
    // calculationsP[0].innerText = izraz + ' = ' + konacanIzraz[0]


    if (procesRada !== 'yes')
        console.log(izraz, ' = ', Math.round(konacanIzraz[0] * brojDecimala) / brojDecimala)

    return Math.round(konacanIzraz[0] * brojDecimala) / brojDecimala
}


// kalkulator('-2.2 + 4*(5+6*(2/1.5)) + (5.25^2)', 2, 'yes') // ('izraz', broj decimala where default is '0', 'process no/yes where default is 'no')
// // Covers: '/*%+-^' 'pow' 'sqrt' '()' 'floats' 'ints' and even ',' instead of '.' while not caring about how many spaces there are between each char