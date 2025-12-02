export const postalCodePatterns: Record<string, RegExp> = {
    DE: /^\d{5}$/,
    AT: /^\d{4}$/,
    FR: /^\d{5}$/,
    GB: /^([A-Z]{1,2}[0-9][0-9A-Z]?)\\s?[0-9][A-Z]{2}$/,
    DK: /^\d{4}$/,
    NL: /^\d{4}\\s?[A-Z]{2}$/
};

export const taxIdPatterns: Record<string, RegExp> = {
    DE: /^DE\d{9}$/,
    AT: /^ATU\d{8}$/,
    FR: /^FR[A-Z0-9]{0,2}\d{9}$/,
    GB: /^GB(?:\d{12}|\d{9}|GD\d{3}|HA\d{3})$/,
    DK: /^DK\d{8}$/,
    NL: /^NL\d{9}B\d{2}$/
};