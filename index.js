const values = require("just-values");

const instruments = {
  "0": {
    "name": "Acoustic Grand Piano",
    "group": "Piano",
    "value": "acoustic_grand_piano"
  },
  "1": {
    "name": "Bright Acoustic Piano",
    "group": "Piano",
    "value": "bright_acoustic_piano"
  },
  "2": {
    "name": "Electric Grand Piano",
    "group": "Piano",
    "value": "electric_grand_piano"
  },
  "3": {
    "name": "Honky-tonk Piano",
    "group": "Piano",
    "value": "honkytonk_piano"
  },
  "4": {
    "name": "Electric Piano 1",
    "group": "Piano",
    "value": "electric_piano_1"
  },
  "5": {
    "name": "Electric Piano 2",
    "group": "Piano",
    "value": "electric_piano_2"
  },
  "6": {
    "name": "Harpsichord",
    "group": "Piano",
    "value": "harpsichord"
  },
  "7": {
    "name": "Clavinet",
    "group": "Piano",
    "value": "clavinet"
  },
  "8": {
    "name": "Celesta",
    "group": "Chromatic Percussion",
    "value": "celesta"
  },
  "9": {
    "name": "Glockenspiel",
    "group": "Chromatic Percussion",
    "value": "glockenspiel"
  },
  "10": {
    "name": "Music Box",
    "group": "Chromatic Percussion",
    "value": "music_box"
  },
  "11": {
    "name": "Vibraphone",
    "group": "Chromatic Percussion",
    "value": "vibraphone"
  },
  "12": {
    "name": "Marimba",
    "group": "Chromatic Percussion",
    "value": "marimba"
  },
  "13": {
    "name": "Xylophone",
    "group": "Chromatic Percussion",
    "value": "xylophone"
  },
  "14": {
    "name": "Tubular Bells",
    "group": "Chromatic Percussion",
    "value": "tubular_bells"
  },
  "15": {
    "name": "Dulcimer",
    "group": "Chromatic Percussion",
    "value": "dulcimer"
  },
  "16": {
    "name": "Drawbar Organ",
    "group": "Organ",
    "value": "drawbar_organ"
  },
  "17": {
    "name": "Percussive Organ",
    "group": "Organ",
    "value": "percussive_organ"
  },
  "18": {
    "name": "Rock Organ",
    "group": "Organ",
    "value": "rock_organ"
  },
  "19": {
    "name": "Church Organ",
    "group": "Organ",
    "value": "church_organ"
  },
  "20": {
    "name": "Reed Organ",
    "group": "Organ",
    "value": "reed_organ"
  },
  "21": {
    "name": "Accordion",
    "group": "Organ",
    "value": "accordion"
  },
  "22": {
    "name": "Harmonica",
    "group": "Organ",
    "value": "harmonica"
  },
  "23": {
    "name": "Tango Accordion",
    "group": "Organ",
    "value": "tango_accordion"
  },
  "24": {
    "name": "Acoustic Guitar (nylon)",
    "group": "Guitar",
    "value": "acoustic_guitar_nylon"
  },
  "25": {
    "name": "Acoustic Guitar (steel)",
    "group": "Guitar",
    "value": "acoustic_guitar_steel"
  },
  "26": {
    "name": "Electric Guitar (jazz)",
    "group": "Guitar",
    "value": "electric_guitar_jazz"
  },
  "27": {
    "name": "Electric Guitar (clean)",
    "group": "Guitar",
    "value": "electric_guitar_clean"
  },
  "28": {
    "name": "Electric Guitar (muted)",
    "group": "Guitar",
    "value": "electric_guitar_muted"
  },
  "29": {
    "name": "Overdriven Guitar",
    "group": "Guitar",
    "value": "overdriven_guitar"
  },
  "30": {
    "name": "Distortion Guitar",
    "group": "Guitar",
    "value": "distortion_guitar"
  },
  "31": {
    "name": "Guitar Harmonics",
    "group": "Guitar",
    "value": "guitar_harmonics"
  },
  "32": {
    "name": "Acoustic Bass",
    "group": "Bass",
    "value": "acoustic_bass"
  },
  "33": {
    "name": "Electric Bass (finger)",
    "group": "Bass",
    "value": "electric_bass_finger"
  },
  "34": {
    "name": "Electric Bass (pick)",
    "group": "Bass",
    "value": "electric_bass_pick"
  },
  "35": {
    "name": "Fretless Bass",
    "group": "Bass",
    "value": "fretless_bass"
  },
  "36": {
    "name": "Slap Bass 1",
    "group": "Bass",
    "value": "slap_bass_1"
  },
  "37": {
    "name": "Slap Bass 2",
    "group": "Bass",
    "value": "slap_bass_2"
  },
  "38": {
    "name": "Synth Bass 1",
    "group": "Bass",
    "value": "synth_bass_1"
  },
  "39": {
    "name": "Synth Bass 2",
    "group": "Bass",
    "value": "synth_bass_2"
  },
  "40": {
    "name": "Violin",
    "group": "Strings",
    "value": "violin"
  },
  "41": {
    "name": "Viola",
    "group": "Strings",
    "value": "viola"
  },
  "42": {
    "name": "Cello",
    "group": "Strings",
    "value": "cello"
  },
  "43": {
    "name": "Contrabass",
    "group": "Strings",
    "value": "contrabass"
  },
  "44": {
    "name": "Tremolo Strings",
    "group": "Strings",
    "value": "tremolo_strings"
  },
  "45": {
    "name": "Pizzicato Strings",
    "group": "Strings",
    "value": "pizzicato_strings"
  },
  "46": {
    "name": "Orchestral Harp",
    "group": "Strings",
    "value": "orchestral_harp"
  },
  "47": {
    "name": "Timpani",
    "group": "Strings",
    "value": "timpani"
  },
  "48": {
    "name": "String Ensemble 1",
    "group": "Ensemble",
    "value": "string_ensemble_1"
  },
  "49": {
    "name": "String Ensemble 2",
    "group": "Ensemble",
    "value": "string_ensemble_2"
  },
  "50": {
    "name": "Synth Strings 1",
    "group": "Ensemble",
    "value": "synth_strings_1"
  },
  "51": {
    "name": "Synth Strings 2",
    "group": "Ensemble",
    "value": "synth_strings_2"
  },
  "52": {
    "name": "Choir Aahs",
    "group": "Ensemble",
    "value": "choir_aahs"
  },
  "53": {
    "name": "Voice Oohs",
    "group": "Ensemble",
    "value": "voice_oohs"
  },
  "54": {
    "name": "Synth Choir",
    "group": "Ensemble",
    "value": "synth_choir"
  },
  "55": {
    "name": "Orchestra Hit",
    "group": "Ensemble",
    "value": "orchestra_hit"
  },
  "56": {
    "name": "Trumpet",
    "group": "Brass",
    "value": "trumpet"
  },
  "57": {
    "name": "Trombone",
    "group": "Brass",
    "value": "trombone"
  },
  "58": {
    "name": "Tuba",
    "group": "Brass",
    "value": "tuba"
  },
  "59": {
    "name": "Muted Trumpet",
    "group": "Brass",
    "value": "muted_trumpet"
  },
  "60": {
    "name": "French Horn",
    "group": "Brass",
    "value": "french_horn"
  },
  "61": {
    "name": "Brass Section",
    "group": "Brass",
    "value": "brass_section"
  },
  "62": {
    "name": "Synth Brass 1",
    "group": "Brass",
    "value": "synth_brass_1"
  },
  "63": {
    "name": "Synth Brass 2",
    "group": "Brass",
    "value": "synth_brass_2"
  },
  "64": {
    "name": "Soprano Sax",
    "group": "Reed",
    "value": "soprano_sax"
  },
  "65": {
    "name": "Alto Sax",
    "group": "Reed",
    "value": "alto_sax"
  },
  "66": {
    "name": "Tenor Sax",
    "group": "Reed",
    "value": "tenor_sax"
  },
  "67": {
    "name": "Baritone Sax",
    "group": "Reed",
    "value": "baritone_sax"
  },
  "68": {
    "name": "Oboe",
    "group": "Reed",
    "value": "oboe"
  },
  "69": {
    "name": "English Horn",
    "group": "Reed",
    "value": "english_horn"
  },
  "70": {
    "name": "Bassoon",
    "group": "Reed",
    "value": "bassoon"
  },
  "71": {
    "name": "Clarinet",
    "group": "Reed",
    "value": "clarinet"
  },
  "72": {
    "name": "Piccolo",
    "group": "Pipe",
    "value": "piccolo"
  },
  "73": {
    "name": "Flute",
    "group": "Pipe",
    "value": "flute"
  },
  "74": {
    "name": "Recorder",
    "group": "Pipe",
    "value": "recorder"
  },
  "75": {
    "name": "Pan Flute",
    "group": "Pipe",
    "value": "pan_flute"
  },
  "76": {
    "name": "Blown bottle",
    "group": "Pipe",
    "value": "blown_bottle"
  },
  "77": {
    "name": "Shakuhachi",
    "group": "Pipe",
    "value": "shakuhachi"
  },
  "78": {
    "name": "Whistle",
    "group": "Pipe",
    "value": "whistle"
  },
  "79": {
    "name": "Ocarina",
    "group": "Pipe",
    "value": "ocarina"
  },
  "80": {
    "name": "Lead 1 (square)",
    "group": "Synth Lead",
    "value": "lead_1_square"
  },
  "81": {
    "name": "Lead 2 (sawtooth)",
    "group": "Synth Lead",
    "value": "lead_2_sawtooth"
  },
  "82": {
    "name": "Lead 3 (calliope)",
    "group": "Synth Lead",
    "value": "lead_3_calliope"
  },
  "83": {
    "name": "Lead 4 (chiff)",
    "group": "Synth Lead",
    "value": "lead_4_chiff"
  },
  "84": {
    "name": "Lead 5 (charang)",
    "group": "Synth Lead",
    "value": "lead_5_charang"
  },
  "85": {
    "name": "Lead 6 (voice)",
    "group": "Synth Lead",
    "value": "lead_6_voice"
  },
  "86": {
    "name": "Lead 7 (fifths)",
    "group": "Synth Lead",
    "value": "lead_7_fifths"
  },
  "87": {
    "name": "Lead 8 (bass + lead)",
    "group": "Synth Lead",
    "value": "lead_8_bass_lead"
  },
  "88": {
    "name": "Pad 1 (new age)",
    "group": "Synth Pad",
    "value": "pad_1_new_age"
  },
  "89": {
    "name": "Pad 2 (warm)",
    "group": "Synth Pad",
    "value": "pad_2_warm"
  },
  "90": {
    "name": "Pad 3 (polysynth)",
    "group": "Synth Pad",
    "value": "pad_3_polysynth"
  },
  "91": {
    "name": "Pad 4 (choir)",
    "group": "Synth Pad",
    "value": "pad_4_choir"
  },
  "92": {
    "name": "Pad 5 (bowed)",
    "group": "Synth Pad",
    "value": "pad_5_bowed"
  },
  "93": {
    "name": "Pad 6 (metallic)",
    "group": "Synth Pad",
    "value": "pad_6_metallic"
  },
  "94": {
    "name": "Pad 7 (halo)",
    "group": "Synth Pad",
    "value": "pad_7_halo"
  },
  "95": {
    "name": "Pad 8 (sweep)",
    "group": "Synth Pad",
    "value": "pad_8_sweep"
  },
  "96": {
    "name": "FX 1 (rain)",
    "group": "Synth Effects",
    "value": "fx_1_rain"
  },
  "97": {
    "name": "FX 2 (soundtrack)",
    "group": "Synth Effects",
    "value": "fx_2_soundtrack"
  },
  "98": {
    "name": "FX 3 (crystal)",
    "group": "Synth Effects",
    "value": "fx_3_crystal"
  },
  "99": {
    "name": "FX 4 (atmosphere)",
    "group": "Synth Effects",
    "value": "fx_4_atmosphere"
  },
  "100": {
    "name": "FX 5 (brightness)",
    "group": "Synth Effects",
    "value": "fx_5_brightness"
  },
  "101": {
    "name": "FX 6 (goblins)",
    "group": "Synth Effects",
    "value": "fx_6_goblins"
  },
  "102": {
    "name": "FX 7 (echoes)",
    "group": "Synth Effects",
    "value": "fx_7_echoes"
  },
  "103": {
    "name": "FX 8 (sci-fi)",
    "group": "Synth Effects",
    "value": "fx_8_scifi"
  },
  "104": {
    "name": "Sitar",
    "group": "Ethnic",
    "value": "sitar"
  },
  "105": {
    "name": "Banjo",
    "group": "Ethnic",
    "value": "banjo"
  },
  "106": {
    "name": "Shamisen",
    "group": "Ethnic",
    "value": "shamisen"
  },
  "107": {
    "name": "Koto",
    "group": "Ethnic",
    "value": "koto"
  },
  "108": {
    "name": "Kalimba",
    "group": "Ethnic",
    "value": "kalimba"
  },
  "109": {
    "name": "Bagpipe",
    "group": "Ethnic",
    "value": "bagpipe"
  },
  "110": {
    "name": "Fiddle",
    "group": "Ethnic",
    "value": "fiddle"
  },
  "111": {
    "name": "Shanai",
    "group": "Ethnic",
    "value": "shanai"
  },
  "112": {
    "name": "Tinkle Bell",
    "group": "Percussive",
    "value": "tinkle_bell"
  },
  "113": {
    "name": "Agogo",
    "group": "Percussive",
    "value": "agogo"
  },
  "114": {
    "name": "Steel Drums",
    "group": "Percussive",
    "value": "steel_drums"
  },
  "115": {
    "name": "Woodblock",
    "group": "Percussive",
    "value": "woodblock"
  },
  "116": {
    "name": "Taiko Drum",
    "group": "Percussive",
    "value": "taiko_drum"
  },
  "117": {
    "name": "Melodic Tom",
    "group": "Percussive",
    "value": "melodic_tom"
  },
  "118": {
    "name": "Synth Drum",
    "group": "Percussive",
    "value": "synth_drum"
  },
  "119": {
    "name": "Reverse Cymbal",
    "group": "Percussive",
    "value": "reverse_cymbal"
  },
  "120": {
    "name": "Guitar Fret Noise",
    "group": "Sound effects",
    "value": "guitar_fret_noise"
  },
  "121": {
    "name": "Breath Noise",
    "group": "Sound effects",
    "value": "breath_noise"
  },
  "122": {
    "name": "Seashore",
    "group": "Sound effects",
    "value": "seashore"
  },
  "123": {
    "name": "Bird Tweet",
    "group": "Sound effects",
    "value": "bird_tweet"
  },
  "124": {
    "name": "Telephone Ring",
    "group": "Sound effects",
    "value": "telephone_ring"
  },
  "125": {
    "name": "Helicopter",
    "group": "Sound effects",
    "value": "helicopter"
  },
  "126": {
    "name": "Applause",
    "group": "Sound effects",
    "value": "applause"
  },
  "127": {
    "name": "Gunshot",
    "group": "Sound effects",
    "value": "gunshot"
  }
}

function getInstrumentById(id) {
  return instruments[id]
}

function getInstrumentByName(name) {
  return values(instruments).find(function(instrument) {
    return instrument.name === name
  })
}

function getInstrumentNames() {
  return values(instruments).map(function(instrument) {
    return instrument.name === name
  });
}

function getInstrumentByValue(value) {
  return values(instruments).find(function(instrument) {
    return instrument.value === value
  })
}

module.exports = {
  getInstrumentById: getInstrumentById,
  getInstrumentByName: getInstrumentByName,
  getInstrumentNames: getInstrumentNames,
  instruments: instruments,
  getInstrumentByValue: getInstrumentByValue
}
