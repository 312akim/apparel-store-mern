// Replaces spaces with -'s

export const spacesToHashDelimiter = (x) => {
    return x.replace(/ /g,'-');
}