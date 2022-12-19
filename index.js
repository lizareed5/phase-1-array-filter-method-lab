const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sam"]

function findMatching(drivers, string){
    let matches = drivers.filter(person => person === string);
    return matches
    // if (typeof person === 'string') {
    //     return matches.names
    // }
}

function fuzzyMatch(drivers, string){
    let fuzzyMatch = drivers.filter(person => person[0].indexOf(string) === 0);
    return fuzzyMatch
}

function matchName (drivers, string){
    let lastMatch = drivers.filter(person => person === string);
    return lastMatch.hometown
}