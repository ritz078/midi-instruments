# midi-instruments

A list of instruments according to midi spec.

## Installation
```
yarn add midi-instruments
```

## Usage
```js
import { 
  instruments, 
  getInstrumentById,
  getInstrumentByName,
  getInstrumentNames
} from "midi-instruments"

console.log(instruments) // An object of all the instruments where the key is the instrumentId.

console.log(getInstrumentById(1))
/* {
    "name": "Acoustic Grand Piano",
    "group": "Piano",
    "value": "acoustic_grand_piano"
  } */

console.log(getInstrumentByName("Acoustic Grand Piano"))
/* {
    "name": "Acoustic Grand Piano",
    "group": "Piano",
    "value": "acoustic_grand_piano"
  } */

console.log(getInstrumentNames())
// ["Acoustic Grand Piano", "Bright Acoustic Piano", ...]
```

## License 
MIT