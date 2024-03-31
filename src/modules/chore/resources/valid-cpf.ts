export default function isValidCpf(cpf: string) {
    const cpfNumbersBlackList: Array<string> = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;

    if(!cpf || cpf === ''){
        return false
    }

    if(!cpfRegex.test(cpf)){
        return false
    }

    cpf = cpf.replace(/\D/g, '')

    var remainder = 0
    var sum = 0
    if (cpfNumbersBlackList.includes(cpf)){
        return false
    } 

    for (let i=1; i<=9; i++){
        sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i)
    }
    remainder = (sum * 10) % 11;

    if ((remainder == 10) || (remainder == 11)){
        remainder = 0
    }
    if (remainder != parseInt(cpf.substring(9, 10)) ){
        return false
    } 

    sum = 0
    for (let i = 1; i <= 10; i++){
        sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i)
    } 
    remainder = (sum * 10) % 11
    if ((remainder == 10) || (remainder == 11)){
        remainder = 0
    }  
    if (remainder != parseInt(cpf.substring(10, 11) ) ){
        return false
    } 
    return true
}