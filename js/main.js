function getYearMonthDiffInText(date1, date2) {
    const years = date1.diff(date2, 'year');
    date2.add(years, 'years');
    const months = date1.diff(date2, 'months');
    date2.add(months, 'months');
    let diff = years >= 1 ? `${years} year${years > 1 ? 's' : ''} ` : '';
    diff += months > 1 ? `${months} months`: '1 month';
    return diff;
}

document.getElementById("current-work-exp").innerHTML = getYearMonthDiffInText(moment(), moment("20200301", "YYYYMMDD"));
document.getElementById("overall-work-exp").innerText = getYearMonthDiffInText(moment(), moment("20180101", "YYYYMMDD"));