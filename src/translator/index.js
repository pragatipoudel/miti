const nepDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export const translateNumToNepali = (englishNum) => {
    let remainder = englishNum;
    let nepaliNum = '';

    for (let i = 0; remainder !== 0; i += 1) {
        const englishDigit = remainder % 10;
        remainder = Math.floor(remainder / 10);
        const nepaliDigit = nepDigits[englishDigit];
        nepaliNum = `${nepaliDigit}${nepaliNum}`;
    }

    return nepaliNum;
};
