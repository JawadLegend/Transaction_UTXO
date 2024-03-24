export default class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs
        this.outputUTXOs = outputUTXOs

        //check if the inputUTXOs are not spent
        for (let i = 0; i < this.inputUTXOs.length; i++) {
            if (this.inputUTXOs[i].spent) {
                console.log("Already spent")
            }
        }

        // calculate the total value of inputs
        let totalValueInputs = 0
        for (let i = 0; i < this.inputUTXOs.length; i++) {
            totalValueInputs += this.inputUTXOs[i].amount
        }

        // calculate the total value of outputs
        let totalValueOutputs = 0
        for (let i = 0; i < this.outputUTXOs.length; i++) {
            totalValueOutputs += this.outputUTXOs[i].amount
        }

        //check if there's sufficient funds available
        if (totalValueInputs < totalValueOutputs) {
            console.log("Insufficient funds")
        }

        // check each input UTXO to ensure its unspent
        for (let i = 0; i < this.inputUTXOs.length; i++) {
            this.inputUTXOs[i].spent = true
        }

        return "Successfully Transaction"
    }
}
