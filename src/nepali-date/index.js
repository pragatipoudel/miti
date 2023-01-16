import nepaliDates from "./data";

class NepaliDate {
    static startNepaliDate = new NepaliDate(2000, 0, 1)
    static startEnglishDate = new Date(1943, 3, 14)

    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    toEnglishDate() {
        const currentYear = this.year - 2000;
        let sum = 0;
        for (let i = 0; i < currentYear; i++) {
            for (let j = 0; j < 12; j++) {
                sum += nepaliDates[i][j];
            }
        }

        for (let i = 0; i < this.month; i++) {
            sum += nepaliDates[currentYear][i];
        }

        sum += this.date;

        const englishDate = new Date(NepaliDate.startEnglishDate);
        englishDate.setDate(englishDate.getDate() + sum - 1)

        return englishDate;
    }
}

export default NepaliDate
