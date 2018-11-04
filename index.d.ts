interface Instrument {
  name: string;
  value: string;
  group: string;
}

interface Instruments {
  [key: string]: Instrument
};

export declare const instruments: Instruments;

export declare function getInstrumentById(id:number | string): Instrument;
export declare function getInstrumentByName(name: string): Instrument;
export declare function getInstrumentNames(): string[];
export declare function getInstrumentByValue(value: string): Instrument;

