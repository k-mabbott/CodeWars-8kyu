// How good are you really? CodeWars

// Description:

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



function betterThanAverage(classPoints, yourPoints) {
    let classScoreAvg = 0;
    for (var i = 0; i < classPoints.length; i++){  // Iterates through the class scores and adds them together
        classScoreAvg += classPoints[i];
    } 
    classScoreAvg = classScoreAvg / classPoints.length; // Calculates the average of the class score
    if (yourPoints > classScoreAvg){ // Compares yours to the class average
        return true;
    } else {
        return false;
    }

}