
export class DateUtils {

    static convertDateFormatToParsable(theDate: string): string {
        // let theDate = 'Jan 10, 2020 9:35:38 AM';
        const utcReplacement = theDate.slice(0, theDate.length - 2).concat('UTC');
        const jsonFormat = new Date(utcReplacement).toJSON();
        const indexOfT = jsonFormat.indexOf('T');
        const removeT = jsonFormat.replace('T', ' ');
        const removeZ = removeT.slice(0, removeT.length - 5);
        return removeZ;
    }
}