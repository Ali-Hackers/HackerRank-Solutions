function catAndMouse(x, z, y) {
    const distanceCatA = Math.abs(x - z);
    const distanceCatB = Math.abs(y - z);
    // math.abs chek that values is positive 
    
    if (distanceCatA < distanceCatB) {
        return "Cat A";
    } else if (distanceCatB < distanceCatA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}



const catAndMouse = catAndMouse(80, 104, 70);
console.log(catAndMouse)
