export const parseDate = (date: string): Date => {
    if (date.toLowerCase() === "present") return new Date(); // "Present" should be treated as the latest
    const [month, year] = date.split("-").map(Number);
    return new Date(year, month - 1); // Convert MM-YYYY to Date object
};