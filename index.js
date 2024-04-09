function findMatching (names, string) {
    return names.filter((driversMatch) => 
        driversMatch.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch (names, string) {
    return names.filter((driversMatch) => 
        driversMatch.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function matchName (driverArray, string) {
    return driverArray.filter((record) => record.name === string);
}