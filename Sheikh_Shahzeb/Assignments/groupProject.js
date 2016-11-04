// JavaScript source code
function total(coins, dollars)
{
    this.coins = coins;
    this.dollars = dollars;

    this.total = function () {
        if (this.coins == .100) {
            this.coins = 0;
            this.dollars += 1.00;
        }
        console.log("Your Total: " + this.dollars + this.coins)
    }
    return this;
}
total()

function withdrawl(num, num2)
{
    this.amount = num - num2;
    return this;
}

function deopsit(coins, dollars)
{
    while(this.coins >= 100)
    {
        this.coins -= 100;
        this.dollars += 1.00;
    }
    return this
}

function Wallet(coins, dollars)
{
    this.coins = coins;
    this.dollars = dollars;

    this.add = function () { withdrawl(this.coins, this.dollars) }
    this.subtract = function () { deposit(this.coins, this.dollars) }
    this.printTotal = function () { total(this.coins, this.dollars) };
    return this;
}

function bankAccounts(checking,saving)
{
    this.checking = checking;
    this.saving = saving;

    this.add = function () { withdrawl(this.checking, this.savings) }
    this.subtract = function () { deposit(this.coins, this.dollars) }
    this.printTotal = function () { total(this.coins, this.dollars) };
    return this;
}