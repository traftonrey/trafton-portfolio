export const formatDate = (date: string): string => {
    const [month, year] = date.split("-");
    const dateObj = new Date(Number(year), Number(month) - 1);
    return dateObj.toLocaleString("default", { month: "long", year: "numeric" });
};
