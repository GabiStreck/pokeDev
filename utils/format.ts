export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function normalize(str: string): string {
    return str.includes('-') ? str.replaceAll('-', ' ') : str;
}

export function getNumberFormat(number: number): string {
    return `#${number.toString().padStart(3, '0')}`
}

export const convertLibsToKgs = (libs: number) => {
    var kilograms = libs * 0.453592;
    return kilograms;
}