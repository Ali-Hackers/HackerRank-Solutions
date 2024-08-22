
function getMaxCost(keyboards, usbDrives, budget) {
    let maxCost = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < usbDrives.length; j++) {
            let currentCost = keyboards[i] + usbDrives[j];

            if (currentCost <= budget && currentCost > maxCost) {
                maxCost = currentCost;
            }
        }
    }

    return maxCost;
}

const keyboards = [40, 50, 60];
const usbDrives = [8, 12, 20];
const budget = 60;

const result = getMaxCost(keyboards, usbDrives, budget);
console.log(result);  
