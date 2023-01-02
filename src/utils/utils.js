export const getDayName = (dateString) => {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(dateString).getDay()];
    return dayName;
}

export const getMonthName = (date) => {
    const monthNumber = (new Date(date)).getMonth() + 1;
    return new Date('1999-' + monthNumber + '-15').toLocaleString('en-us', { month: 'long' });
}

export const getDay = (date) => {
    return new Date(date).getDate();
}