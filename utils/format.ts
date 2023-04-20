export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getNumberFormat(number: number): string {
    return `#${number.toString().padStart(3, '0')}`
}