// import cookie from "cookie-cutter";
import cookie from "js-cookie";
const hasSupport = () => typeof Storage !== "undefined";
export const STORE_KEY = "my-store";

export interface StorageManager {
    get(init?: StoreData | string): StoreData | string | undefined;
    set(value: StoreData | string): void;
    type: "cookie" | "localStorage";
}

export interface HourIntervalPerDay {
    label: string;
    hours: string;
}
export interface StoreData {
    title: string;
    slug: string;
    address1: string;
    storeHours: any;
}

/**
 * Object to handle read/write local storage of stores
 */

export const localStorageManager: StorageManager = {
    get(init?) {
        if (!hasSupport) return init;
        try {
            const value = JSON.parse(localStorage.getItem(STORE_KEY));
            return value ?? init;
        } catch (error) {
            console.log(error);
            return init;
        }
    },
    set(value) {
        if (!hasSupport) return;
        try {
            localStorage.setItem(
                STORE_KEY,
                typeof value === "string" ? value : JSON.stringify(value),
            );
        } catch (error) {
            console.log(error);
        }
    },
    type: "localStorage",
};

/**
 * Object to handle read/write cookies
 */
export const cookieStorageManager: StorageManager = {
    get(init?) {
        if (!hasSupport) return init;
        try {
            const value = cookie.get(STORE_KEY);
            return value ?? init;
            //return init;
        } catch (error) {
            console.log(error);
            return init;
        }
    },
    set(value) {
        if (!hasSupport) return;
        try {
            cookie.set(STORE_KEY, value);
        } catch (error) {
            console.log(error);
        }
    },
    type: "cookie",
};
/**
 * get the store hour according to the day
 */

export const getHour = (hourData?: HourIntervalPerDay[]): string => {
    const today = dayOfWeekAsString(new Date().getDay()).toLowerCase();

    const hourOfDay: string = hourData.filter(
        (day) => today.indexOf(day.label.toLowerCase()) >= 0,
    )[0].hours;

    return hourOfDay ?? "";
    //return "";
};

/**
 * Converts a day number to a string.
 *
 * @param {Number} dayIndex
 * @return {String} Returns day as string
 */
const dayOfWeekAsString = (dayIndex) => {
    return (
        [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ][dayIndex] || ""
    );
};
