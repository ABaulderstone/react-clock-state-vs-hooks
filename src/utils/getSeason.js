function getSeason(latitude, date) {
    const month = date.getMonth() + 1;
    const hemisphere = latitude <=0 ? "south" : "north"
    const seasons = [
    {south: "summer", north: "winter",  months: [1,2,12]},
    {south: "autumn", north: "spring",  months: [3,4,5]},
    {south: "winter", north: "summer",  months: [6,7,8]},
    {south: "spring", north: "autumn",  months: [9,10,11]},
    ]
    
    for(let season of seasons){
        if (season.months.includes(month)) {
            return season[hemisphere]
        }
    }
}

export default getSeason