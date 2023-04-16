import moment from 'moment'

const getFilteredExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const momentStartDate = moment(startDate, 'YYYY-MM-DD')
        const momentEndDate = moment(endDate, 'YYYY-MM-DD')
        const createdAtMoment = moment(expense.createdAt)
        console.log(momentStartDate)
        console.log(momentEndDate)
        const startDateMatch = startDate ? momentStartDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? momentEndDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt? 1:-1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount? 1:-1;
        }
    })
}

export default getFilteredExpenses;