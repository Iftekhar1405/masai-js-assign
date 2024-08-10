function CodingScoreCheck(scores, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
            
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry, you haven't cleared the coding round.");
            }
        }, 2000);
    });
}

// Example usage
const scores = [85, 90, 78, 88];
const cutoff = 80;

CodingScoreCheck(scores, cutoff)
    .then(averageScore => console.log(`Congratulations! Your average score is ${averageScore}.`))
    .catch(errorMessage => console.log(errorMessage));
