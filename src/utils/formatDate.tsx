export const formatDate = (date: string, shortMonth = false): string => {
    const [month, year] = date.split("-");
    const dateObj = new Date(Number(year), Number(month) - 1);

    // Handle "Present" case if needed
    if (isNaN(dateObj.getTime())) return "Present";

    return dateObj.toLocaleString("default", {
        month: shortMonth ? "short" : "long",
        year: "numeric"
    });
};