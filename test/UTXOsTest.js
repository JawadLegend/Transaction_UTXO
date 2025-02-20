import { assert } from "chai"
import Transaction from "../Transaction.js"
import TXOs from "../TXOs.js"

describe("Transaction", function () {
    const fromAddress = "1DBS97W3jWw6FnAqdduK1NW6kFo3Aid1N6"
    const toAddress = "12ruWjb4naCME5QhjrQSJuS5disgME22fe"

    describe("with sufficient UTXOs", () => {
        const txo1 = new TXOs(fromAddress, 5)
        const txo2 = new TXOs(fromAddress, 5)
        const outputTXO1 = new TXOs(toAddress, 10)
        const tx = new Transaction([txo1, txo2], [outputTXO1])

        it("should execute without error", () => {
            try {
                tx.execute()
            } catch (ex) {
                assert.fail(ex.message)
                console.log(ex)
            }
        })
    })

    describe("with insufficient UTXOs", () => {
        const txo1 = new TXOs(fromAddress, 3)
        const txo2 = new TXOs(fromAddress, 3)
        const txo3 = new TXOs(fromAddress, 3)
        const outputTXO1 = new TXOs(toAddress, 10)

        const tx = new Transaction([txo1, txo2, txo3], [outputTXO1])

        it("should throw an error on execute", () => {
            let ex
            try {
                tx.execute()
            } catch (_ex) {
                ex = _ex
            }
            assert(ex, "Did not throw an exception for a lack of UTXOs funds!")
        })
    })
})
