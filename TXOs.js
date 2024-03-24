export default class TXOs {
    constructor(owner, amount) {
        this.owner = owner
        this.amount = amount
        this.spent = false

        if (!this.spent) {
            this.spent = true
            return true
        } else {
            return false
        }
    }
}
