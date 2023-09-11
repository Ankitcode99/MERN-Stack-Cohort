function calculateTotalSpentByCategory(transactions) {
    const categoryExpense = new Map();

    for(let i = 0; i < transactions.length; i++) {
        const category = transactions[i].category;
        const amount = transactions[i].price;

        if(categoryExpense.has(category)) {
            categoryExpense.set(category, categoryExpense.get(category) + amount);
        } else {
            categoryExpense.set(category, amount);
        }
    }

    const result = Array.from(categoryExpense, ([category, amount])=>({[category]: amount}));

    return result;
}

module.exports = calculateTotalSpentByCategory;