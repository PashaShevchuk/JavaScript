function userCard(number) {
    const cardEx = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    };

    function getCardOptions() {
        return cardEx;
    }

    function putCredits(money) {
        cardEx.balance += money;
    }

    function takeCredits(money) {
        (money > cardEx.balance && money > cardEx.balance)
            ? console.error('you have exceeded the limit on the card')
            : cardEx.balance -= money;
    }

    function setTransactionLimit(trnLimit) {
        cardEx.transactionLimit = trnLimit;
    }

    function transferCredits(creditTransfer, card) {
        const tax = creditTransfer * 0.05;
        (creditTransfer > cardEx.balance && creditTransfer > cardEx.balance)
            ? console.error('you have exceeded the limit on the card')
            : cardEx.balance = cardEx.balance - creditTransfer - tax;
        card.putCredits(creditTransfer);

        const transferInfo = {
            operationType: 'Received credits',
            credits: creditTransfer,
            operationTime: new Date()
        };

        cardEx.historyLogs.push(transferInfo);
    }


    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

let card1 = userCard(1); // create card 1
card1.putCredits(100);
card1.takeCredits(50);
card1.setTransactionLimit(300);
console.log(card1.getCardOptions());

let card2 = userCard(2);
card1.transferCredits(50, card2);
card1.transferCredits(80, card2);
console.log(card2.getCardOptions());
console.log(card1.getCardOptions());

console.log('*****************************');

//======================================================================================================================
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length > 3) return;
        const key = this.cards.length + 1;
        this.cards.push(userCard(key));
    }

    getCardByKey(key) {
        if (key > 3 && key <= 0) return;
        const card = this.cards.find(card => card.getCardOptions().key === key);
        const cardOptions = card.getCardOptions();
        Object.setPrototypeOf(cardOptions, card);
        return cardOptions;
    }


}

let user = new UserAccount('Bob');
console.log(user);
user.addCard();
user.addCard();
console.log(user);

const userCard1 = user.getCardByKey(1);
const userCard2 = user.getCardByKey(2);

console.log(userCard1);
console.log(userCard2);

userCard1.putCredits(300);
console.log(userCard1.getCardOptions());