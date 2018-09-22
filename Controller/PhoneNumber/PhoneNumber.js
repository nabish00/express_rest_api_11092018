// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;
 
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export const GetCountryCode = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return number.getCountryCode();
};

export const GetNationalNumber = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return number.getNationalNumber();

}

export const GetRawInput = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return number.getRawInput();
}
export const IsPossibleNumber = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.isPossibleNumber(number);
}
export const IsValidNumber = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.isValidNumber(number);
}
export const IsValidNumberForRegion = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.isValidNumberForRegion(number, countryCd)

}
export const GetRegionCodeForNumber = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.getRegionCodeForNumber(number);
}
export const GetNumberType = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.getNumberType(number)
}
export const GetE164Format = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    phoneUtil.format(number, PNF.E164);
}
export const GetOriginalFormat = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.formatInOriginalFormat(number, countryCd);
}

export const GetNationalFormat = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    return phoneUtil.format(number, PNF.NATIONAL);
}

export const GetInternationalFormat = (number, countryCd) => {
    const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
    phoneUtil.format(number, PNF.INTERNATIONAL);
}