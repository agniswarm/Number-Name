namespace NumberName {

    let numbers: Array<string> = ['Zero', "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thriteen", "Forteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen", "Twenty"]
    let tenTimes: Array<string> = ["Ten", "Twenty", "Thrity", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    let higherOrder: Array<string> = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion", "Quindecillion", "Sexdexillion", "Septendecillion", "Octodecillion", "Novemdecillion", "Vigintillion"]

    export function parseNumber(number: number) {
        let response: string = ""
        if (typeof (number) === 'number') {
            if (number < 0) {
                response += "Minus "
                number *= -1
            }
            let stringifyNumber = String(number).split('.')
            // response += oneToHundred(Number(stringifyNumber[0]))
            response += utilizeHigherOrder(Number(stringifyNumber[0]))
            if (stringifyNumber[1]) {
                response += ' Point '
                response += afterDecimal(stringifyNumber[1])
            }
            console.log(response.replace(/\s{2,}/g, " "))
        }
        else
            throw Error(`Number expected but got ${typeof (number)}`)
    }
    function utilizeHigherOrder(num: number): string {
        let response: string = ""
        let m = num
        let k: Array<number> = []
        do {
            k.push(m % 1000)
            m = Math.floor(m / 1000)
        } while (m != 0)
        console.log(k)
        for (let i = 0; i < k.length; i++) {
            response = `${oneToHundred(k[i])} ${higherOrder[i]} ${response}`
        }

        return response
    }

    function oneToHundred(num: number, flag?: Boolean): string {
        let response: string = ""
        if (Math.floor(num / 100)) {
            response += numbers[Math.floor(num / 100)] + " Hundred "
            response += oneToHundred(num % 100, true)
        }
        else
            if (num == 0 && flag == true)
                response = ""
            else if (num == 0)
                response = numbers[num]
            else if (num < 20)
                response = numbers[num]
            else if (num % 10 == 0)
                response = tenTimes[num / 10 - 1]
            else {
                response = `${tenTimes[Math.floor(num / 10) - 1]}-${numbers[num % 10]}`
            }
        return response
    }

    function afterDecimal(num: string): string {
        let response: string = ""
        let m = num.split('').map((a) => { return Number(a) })
        for (let i of m) {
            response += numbers[i] + " "
        }
        return response
    }
}
export default NumberName
