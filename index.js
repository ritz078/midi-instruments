const instruments = {
  "1": {
    "name": "Acoustic Grand Piano",
    "group": "Piano",
    "value": "acoustic_grand_piano"
  },
  "2": {
    "name": "Bright Acoustic Piano",
    "group": "Piano",
    "value": "bright_acoustic_piano"
  },
  "3": {
    "name": "Electric Grand Piano",
    "group": "Piano",
    "value": "electric_grand_piano"
  },
  "4": {
    "name": "Honky-tonk Piano",
    "group": "Piano",
    "value": "honky_tonk_piano"
  },
  "5": {
    "name": "Electric Piano 1",
    "group": "Piano",
    "value": "electric_piano_1"
  },
  "6": {
    "name": "Electric Piano 2",
    "group": "Piano",
    "value": "electric_piano_2"
  },
  "7": {
    "name": "Harpsichord",
    "group": "Piano",
    "value": "harpsichord"
  },
  "8": {
    "name": "Clavinet",
    "group": "Piano",
    "value": "clavinet"
  },
  "9": {
    "name": "Celesta",
    "group": "Chromatic Percussion",
    "value": "celesta"
  },
  "10": {
    "name": "Glockenspiel",
    "group": "Chromatic Percussion",
    "value": "glockenspiel"
  },
  "11": {
    "name": "Music Box",
    "group": "Chromatic Percussion",
    "value": "music_box"
  },
  "12": {
    "name": "Vibraphone",
    "group": "Chromatic Percussion",
    "value": "vibraphone"
  },
  "13": {
    "name": "Marimba",
    "group": "Chromatic Percussion",
    "value": "marimba"
  },
  "14": {
    "name": "Xylophone",
    "group": "Chromatic Percussion",
    "value": "xylophone"
  },
  "15": {
    "name": "Tubular Bells",
    "group": "Chromatic Percussion",
    "value": "tubular_bells"
  },
  "16": {
    "name": "Dulcimer",
    "group": "Chromatic Percussion",
    "value": "dulcimer"
  },
  "17": {
    "name": "Drawbar Organ",
    "group": "Organ",
    "value": "drawbar_organ"
  },
  "18": {
    "name": "Percussive Organ",
    "group": "Organ",
    "value": "percussive_organ"
  },
  "19": {
    "name": "Rock Organ",
    "group": "Organ",
    "value": "rock_organ"
  },
  "20": {
    "name": "Church Organ",
    "group": "Organ",
    "value": "church_organ"
  },
  "21": {
    "name": "Reed Organ",
    "group": "Organ",
    "value": "reed_organ"
  },
  "22": {
    "name": "Accordion",
    "group": "Organ",
    "value": "accordion"
  },
  "23": {
    "name": "Harmonica",
    "group": "Organ",
    "value": "harmonica"
  },
  "24": {
    "name": "Tango Accordion",
    "group": "Organ",
    "value": "tango_accordion"
  },
  "25": {
    "name": "Acoustic Guitar (nylon)",
    "group": "Guitar",
    "value": "acoustic_guitar_nylon_"
  },
  "26": {
    "name": "Acoustic Guitar (steel)",
    "group": "Guitar",
    "value": "acoustic_guitar_steel_"
  },
  "27": {
    "name": "Electric Guitar (jazz)",
    "group": "Guitar",
    "value": "electric_guitar_jazz_"
  },
  "28": {
    "name": "Electric Guitar (clean)",
    "group": "Guitar",
    "value": "electric_guitar_clean_"
  },
  "29": {
    "name": "Electric Guitar (muted)",
    "group": "Guitar",
    "value": "electric_guitar_muted_"
  },
  "30": {
    "name": "Overdriven Guitar",
    "group": "Guitar",
    "value": "overdriven_guitar"
  },
  "31": {
    "name": "Distortion Guitar",
    "group": "Guitar",
    "value": "distortion_guitar"
  },
  "32": {
    "name": "Guitar Harmonics",
    "group": "Guitar",
    "value": "guitar_harmonics"
  },
  "33": {
    "name": "Acoustic Bass",
    "group": "Bass",
    "value": "acoustic_bass"
  },
  "34": {
    "name": "Electric Bass (finger)",
    "group": "Bass",
    "value": "electric_bass_finger_"
  },
  "35": {
    "name": "Electric Bass (pick)",
    "group": "Bass",
    "value": "electric_bass_pick_"
  },
  "36": {
    "name": "Fretless Bass",
    "group": "Bass",
    "value": "fretless_bass"
  },
  "37": {
    "name": "Slap Bass 1",
    "group": "Bass",
    "value": "slap_bass_1"
  },
  "38": {
    "name": "Slap Bass 2",
    "group": "Bass",
    "value": "slap_bass_2"
  },
  "39": {
    "name": "Synth Bass 1",
    "group": "Bass",
    "value": "synth_bass_1"
  },
  "40": {
    "name": "Synth Bass 2",
    "group": "Bass",
    "value": "synth_bass_2"
  },
  "41": {
    "name": "Violin",
    "group": "Strings",
    "value": "violin"
  },
  "42": {
    "name": "Viola",
    "group": "Strings",
    "value": "viola"
  },
  "43": {
    "name": "Cello",
    "group": "Strings",
    "value": "cello"
  },
  "44": {
    "name": "Contrabass",
    "group": "Strings",
    "value": "contrabass"
  },
  "45": {
    "name": "Tremolo Strings",
    "group": "Strings",
    "value": "tremolo_strings"
  },
  "46": {
    "name": "Pizzicato Strings",
    "group": "Strings",
    "value": "pizzicato_strings"
  },
  "47": {
    "name": "Orchestral Harp",
    "group": "Strings",
    "value": "orchestral_harp"
  },
  "48": {
    "name": "Timpani",
    "group": "Strings",
    "value": "timpani"
  },
  "49": {
    "name": "String Ensemble 1",
    "group": "Ensemble",
    "value": "string_ensemble_1"
  },
  "50": {
    "name": "String Ensemble 2",
    "group": "Ensemble",
    "value": "string_ensemble_2"
  },
  "51": {
    "name": "Synth Strings 1",
    "group": "Ensemble",
    "value": "synth_strings_1"
  },
  "52": {
    "name": "Synth Strings 2",
    "group": "Ensemble",
    "value": "synth_strings_2"
  },
  "53": {
    "name": "Choir Aahs",
    "group": "Ensemble",
    "value": "choir_aahs"
  },
  "54": {
    "name": "Voice Oohs",
    "group": "Ensemble",
    "value": "voice_oohs"
  },
  "55": {
    "name": "Synth Choir",
    "group": "Ensemble",
    "value": "synth_choir"
  },
  "56": {
    "name": "Orchestra Hit",
    "group": "Ensemble",
    "value": "orchestra_hit"
  },
  "57": {
    "name": "Trumpet",
    "group": "Brass",
    "value": "trumpet"
  },
  "58": {
    "name": "Trombone",
    "group": "Brass",
    "value": "trombone"
  },
  "59": {
    "name": "Tuba",
    "group": "Brass",
    "value": "tuba"
  },
  "60": {
    "name": "Muted Trumpet",
    "group": "Brass",
    "value": "muted_trumpet"
  },
  "61": {
    "name": "French Horn",
    "group": "Brass",
    "value": "french_horn"
  },
  "62": {
    "name": "Brass Section",
    "group": "Brass",
    "value": "brass_section"
  },
  "63": {
    "name": "Synth Brass 1",
    "group": "Brass",
    "value": "synth_brass_1"
  },
  "64": {
    "name": "Synth Brass 2",
    "group": "Brass",
    "value": "synth_brass_2"
  },
  "65": {
    "name": "Soprano Sax",
    "group": "Reed",
    "value": "soprano_sax"
  },
  "66": {
    "name": "Alto Sax",
    "group": "Reed",
    "value": "alto_sax"
  },
  "67": {
    "name": "Tenor Sax",
    "group": "Reed",
    "value": "tenor_sax"
  },
  "68": {
    "name": "Baritone Sax",
    "group": "Reed",
    "value": "baritone_sax"
  },
  "69": {
    "name": "Oboe",
    "group": "Reed",
    "value": "oboe"
  },
  "70": {
    "name": "English Horn",
    "group": "Reed",
    "value": "english_horn"
  },
  "71": {
    "name": "Bassoon",
    "group": "Reed",
    "value": "bassoon"
  },
  "72": {
    "name": "Clarinet",
    "group": "Reed",
    "value": "clarinet"
  },
  "73": {
    "name": "Piccolo",
    "group": "Pipe",
    "value": "piccolo"
  },
  "74": {
    "name": "Flute",
    "group": "Pipe",
    "value": "flute"
  },
  "75": {
    "name": "Recorder",
    "group": "Pipe",
    "value": "recorder"
  },
  "76": {
    "name": "Pan Flute",
    "group": "Pipe",
    "value": "pan_flute"
  },
  "77": {
    "name": "Blown bottle",
    "group": "Pipe",
    "value": "blown_bottle"
  },
  "78": {
    "name": "Shakuhachi",
    "group": "Pipe",
    "value": "shakuhachi"
  },
  "79": {
    "name": "Whistle",
    "group": "Pipe",
    "value": "whistle"
  },
  "80": {
    "name": "Ocarina",
    "group": "Pipe",
    "value": "ocarina"
  },
  "81": {
    "name": "Lead 1 (square)",
    "group": "Synth Lead",
    "value": "lead_1_square_"
  },
  "82": {
    "name": "Lead 2 (sawtooth)",
    "group": "Synth Lead",
    "value": "lead_2_sawtooth_"
  },
  "83": {
    "name": "Lead 3 (calliope)",
    "group": "Synth Lead",
    "value": "lead_3_calliope_"
  },
  "84": {
    "name": "Lead 4 (chiff)",
    "group": "Synth Lead",
    "value": "lead_4_chiff_"
  },
  "85": {
    "name": "Lead 5 (charang)",
    "group": "Synth Lead",
    "value": "lead_5_charang_"
  },
  "86": {
    "name": "Lead 6 (voice)",
    "group": "Synth Lead",
    "value": "lead_6_voice_"
  },
  "87": {
    "name": "Lead 7 (fifths)",
    "group": "Synth Lead",
    "value": "lead_7_fifths_"
  },
  "88": {
    "name": "Lead 8 (bass + lead)",
    "group": "Synth Lead",
    "value": "lead_8_bass_lead_"
  },
  "89": {
    "name": "Pad 1 (new age)",
    "group": "Synth Pad",
    "value": "pad_1_new_age_"
  },
  "90": {
    "name": "Pad 2 (warm)",
    "group": "Synth Pad",
    "value": "pad_2_warm_"
  },
  "91": {
    "name": "Pad 3 (polysynth)",
    "group": "Synth Pad",
    "value": "pad_3_polysynth_"
  },
  "92": {
    "name": "Pad 4 (choir)",
    "group": "Synth Pad",
    "value": "pad_4_choir_"
  },
  "93": {
    "name": "Pad 5 (bowed)",
    "group": "Synth Pad",
    "value": "pad_5_bowed_"
  },
  "94": {
    "name": "Pad 6 (metallic)",
    "group": "Synth Pad",
    "value": "pad_6_metallic_"
  },
  "95": {
    "name": "Pad 7 (halo)",
    "group": "Synth Pad",
    "value": "pad_7_halo_"
  },
  "96": {
    "name": "Pad 8 (sweep)",
    "group": "Synth Pad",
    "value": "pad_8_sweep_"
  },
  "97": {
    "name": "FX 1 (rain)",
    "group": "Synth Effects",
    "value": "f_x_1_rain_"
  },
  "98": {
    "name": "FX 2 (soundtrack)",
    "group": "Synth Effects",
    "value": "f_x_2_soundtrack_"
  },
  "99": {
    "name": "FX 3 (crystal)",
    "group": "Synth Effects",
    "value": "f_x_3_crystal_"
  },
  "100": {
    "name": "FX 4 (atmosphere)",
    "group": "Synth Effects",
    "value": "f_x_4_atmosphere_"
  },
  "101": {
    "name": "FX 5 (brightness)",
    "group": "Synth Effects",
    "value": "f_x_5_brightness_"
  },
  "102": {
    "name": "FX 6 (goblins)",
    "group": "Synth Effects",
    "value": "f_x_6_goblins_"
  },
  "103": {
    "name": "FX 7 (echoes)",
    "group": "Synth Effects",
    "value": "f_x_7_echoes_"
  },
  "104": {
    "name": "FX 8 (sci-fi)",
    "group": "Synth Effects",
    "value": "f_x_8_sci_fi_"
  },
  "105": {
    "name": "Sitar",
    "group": "Ethnic",
    "value": "sitar"
  },
  "106": {
    "name": "Banjo",
    "group": "Ethnic",
    "value": "banjo"
  },
  "107": {
    "name": "Shamisen",
    "group": "Ethnic",
    "value": "shamisen"
  },
  "108": {
    "name": "Koto",
    "group": "Ethnic",
    "value": "koto"
  },
  "109": {
    "name": "Kalimba",
    "group": "Ethnic",
    "value": "kalimba"
  },
  "110": {
    "name": "Bagpipe",
    "group": "Ethnic",
    "value": "bagpipe"
  },
  "111": {
    "name": "Fiddle",
    "group": "Ethnic",
    "value": "fiddle"
  },
  "112": {
    "name": "Shanai",
    "group": "Ethnic",
    "value": "shanai"
  },
  "113": {
    "name": "Tinkle Bell",
    "group": "Percussive",
    "value": "tinkle_bell"
  },
  "114": {
    "name": "Agogo",
    "group": "Percussive",
    "value": "agogo"
  },
  "115": {
    "name": "Steel Drums",
    "group": "Percussive",
    "value": "steel_drums"
  },
  "116": {
    "name": "Woodblock",
    "group": "Percussive",
    "value": "woodblock"
  },
  "117": {
    "name": "Taiko Drum",
    "group": "Percussive",
    "value": "taiko_drum"
  },
  "118": {
    "name": "Melodic Tom",
    "group": "Percussive",
    "value": "melodic_tom"
  },
  "119": {
    "name": "Synth Drum",
    "group": "Percussive",
    "value": "synth_drum"
  },
  "120": {
    "name": "Reverse Cymbal",
    "group": "Percussive",
    "value": "reverse_cymbal"
  },
  "121": {
    "name": "Guitar Fret Noise",
    "group": "Sound effects",
    "value": "guitar_fret_noise"
  },
  "122": {
    "name": "Breath Noise",
    "group": "Sound effects",
    "value": "breath_noise"
  },
  "123": {
    "name": "Seashore",
    "group": "Sound effects",
    "value": "seashore"
  },
  "124": {
    "name": "Bird Tweet",
    "group": "Sound effects",
    "value": "bird_tweet"
  },
  "125": {
    "name": "Telephone Ring",
    "group": "Sound effects",
    "value": "telephone_ring"
  },
  "126": {
    "name": "Helicopter",
    "group": "Sound effects",
    "value": "helicopter"
  },
  "127": {
    "name": "Applause",
    "group": "Sound effects",
    "value": "applause"
  },
  "128": {
    "name": "Gunshot",
    "group": "Sound effects",
    "value": "gunshot"
  }
};

function getInstrumentById(id) {
  return instruments[id]
}

function getInstrumentByName(name) {
  return instruments.find(function(instrument) {
    return instrument.name === name
  })
}

function getInstrumentNames() {
  return instruments.map(function(instrument) {
    return instrument.name === name
  });
}

module.exports = {
  getInstrumentById: getInstrumentById,
  getInstrumentByName: getInstrumentByName,
  getInstrumentNames: getInstrumentNames,
  instruments: instruments
}