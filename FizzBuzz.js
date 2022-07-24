const fizzBuzz = (n) => {
    let output = [];
    let index = 0;

    if(n>=1 && n<=10000){
        for(let i = 1; i<=n; i++){
            if(i%3 == 0 && i%5 == 0){
                output[index] = "FizzBuzz";
            }
            else if(i%3 == 0){
                output[index] = "Fizz";
            }
            else if(i%5 == 0){
                output[index] = "Buzz";
            }
            else {
                output[index] = `${i}`;
            }
            index++;
        }
        return output;
    }
}
