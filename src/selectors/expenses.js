import moment from 'moment'

const getFilteredExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const momentStartDate = moment(startDate)
        const momentEndDate = moment(endDate)
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? momentStartDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? momentEndDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return moment(a.createdAt).unix() < moment(b.createdAt).unix()? 1:-1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount? 1:-1;
        }
    })
}

export default getFilteredExpenses;