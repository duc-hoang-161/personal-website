export function isValidPhoneNumber(phoneNumber) {
    const phoneNumberRegex =
        /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})(?:[ ]?(?:#|x)(\d+))?$/;
    return phoneNumberRegex.test(phoneNumber);
}

export function isValidEmail(email) {
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}
export function convertSlugToProperty(slug) {
    return slug.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
