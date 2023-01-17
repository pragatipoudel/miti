import moment from 'moment';
import nepaliDates from './data';

class NepaliDate {
    static startNepaliDate = new NepaliDate(2000, 0, 1);

    static startEnglishDate = new Date(1943, 3, 14);

    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    toEnglishDate() {
        const currentYear = this.year - 2000;
        let sum = 0;
        for (let i = 0; i < currentYear; i += 1) {
            for (let j = 0; j < 12; j += 1) {
                sum += nepaliDates[i][j];
            }
        }

        for (let i = 0; i < this.month; i += 1) {
            sum += nepaliDates[currentYear][i];
        }

        sum += this.date;

        const englishDate = new Date(NepaliDate.startEnglishDate);
        englishDate.setDate(englishDate.getDate() + sum - 1);

        return englishDate;
    }

    static fromEnglishDate(englishDate) {
        const start = moment(this.startEnglishDate);
        const end = moment(englishDate);
        let days = end.diff(start, 'days');

        for (let y = 0; y < nepaliDates.length; y += 1) {
            for (let m = 0; m < 12; m += 1) {
                if (days > nepaliDates[y][m]) {
                    days -= nepaliDates[y][m];
                } else {
                    const year = y + 2000;
                    const month = m;
                    const date = days + 1;
                    return new NepaliDate(year, month, date);
                }
            }
        }

        throw new Error('Not supported');
    }
}

export default NepaliDate;
