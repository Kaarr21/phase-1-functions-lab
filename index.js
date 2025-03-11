// Code your solution in this file!
// Function Definitions
function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}

// Export functions if using Mocha in a separate test file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        distanceFromHqInBlocks, 
        distanceFromHqInFeet, 
        distanceTravelledInFeet, 
        calculatesFarePrice 
    };
}
