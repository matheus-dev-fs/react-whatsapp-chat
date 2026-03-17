export const formatSecondsToHour = (seconds: number | undefined): string => {
    if (seconds === undefined) {
        return "";
    }

    const date: Date = new Date(seconds * 1000);
    const hours: string = date.getHours().toString().padStart(2, "0");
    const minutes: string = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}