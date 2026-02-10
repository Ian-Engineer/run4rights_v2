import { Runner } from "./runner";

export interface Event {
    id: string;
    eventDate: string;
    organization: string;
    moneyRaised: number;
    active: boolean;
    donationsOpen: boolean;
    description: string;
    locationName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
    startTime: string;
    endTime: string;
    timezone: string;
    runners?: Runner[]
}

export interface EventsSorted {
    active: Event;
    past: {[key: string]: Event[]};
    future: Event[];
}