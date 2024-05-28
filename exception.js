function risckyOperation() {
    let obj;
    return obj.property;

}

try {
    let result = risckyOperation()
    console.log(result)
} catch (error) {
    console.log("An error occured" + error.message)
} finally {
    console.log("this always executes !")
}