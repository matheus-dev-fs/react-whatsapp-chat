export const formatTime24h = (date: Date): string => {
    if (!(date instanceof Date) || isNaN(date.getTime()) ||!date) {
        return "";
    }

    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}