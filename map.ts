let evenNumbers = new Map<string,number>([['two',2],['four',4],['six',6]])
    let itr1=evenNumbers.entries()
    console.log(itr1)
    for (let entry of itr1){
        console.log(entry);
    }
    