export interface Event {
    id: string;
    date: string;
    organization: string;
    moneyRaised: number;
    active: boolean;
    donationsOpen: boolean;
}

export interface EventsSorted {
    active: Event;
    past: Event[];
    future: Event[];
}