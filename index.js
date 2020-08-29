// Reverse Roman Numeral Decryptor
//from 1-10000

const brandtReverseRoman = (num) => {
    let holdNum = 0;
    let result = "";
    if(num<1) {
        return ("Please input a positive, non-zero number.")
    }
    else {
        holdNum = Math.floor(num/1000);
        result += "M".repeat(holdNum);
        num = num - (holdNum*1000);
        holdNum = Math.floor(num/50);
        if(holdNum == 18 || holdNum == 19) {
            result += "CM"
            num = num - 900;
        }
        else {
            holdNum = Math.floor(num/500)
            result += "D".repeat(holdNum);
            num = num - (holdNum*500);
        }
        holdNum = Math.floor(num/100);
        if(holdNum == 4) {
            result += "CD"
            num = num - 400;
        }
        else {
            result += "C".repeat(holdNum);
            num = num - (holdNum*100);
        }
        holdNum = Math.floor(num/5);
        if(holdNum == 18 || holdNum == 19) {
            result += "XC"
            num = num - 90;
        }
        else {
            holdNum = Math.floor(num/50);
            result += "L".repeat(holdNum);
            num = num - (holdNum*50);
        }
        holdNum = Math.floor(num/10);
        if(holdNum == 4) {
            result += "XL"
            num = num - 40;
        }
        else {
            result += "X".repeat(holdNum);
            num = num - (holdNum*10);
        }
        holdNum = Math.floor(num);
        if(holdNum == 9) {
            result += "IX"
            num = num - 9;
        }
        else {
            holdNum = Math.floor(num/5)
            result += "V".repeat(holdNum);
            num = num - (holdNum*5);
        }
        holdNum = Math.floor(num);
        if(holdNum == 4) {
            result += "IV"
            num = num - 4;
        }
        else {
            result += "I".repeat(holdNum);
            
        }
    }
    return result;
};

export default brandtReverseRoman;