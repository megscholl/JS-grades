
// grades
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// how many of each grade

var Grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0,
    lowest: 100,
    highest: 0,
    countGrade: function(grade) {
        switch (true) {
            case (grade >= 91):
                this.a++;
                break;
            case (grade >= 81 && grade <= 90):
                this.b++;
                break;
            case (grade >= 71 && grade <= 80):
                this.c++;
                break;
            case (grade >= 61 && grade <= 70):
                this.d++;
                break;
            default:
                this.f++;
                break;
        }
    }
}

// var numberOfAs = 0;
// var numberOfBs = 0;
// var numberOfCs = 0;
// var numberOfDs = 0;
// var numberOfFs = 0;

// var lowestGrade = 100;
// var highestGrade = 0;

for (var i = 0; i < scores.length; i++) {

    var grade = scores[i];

    Grades.countGrade(scores[i]);
    
    // switch (true) {
    //     case (grade >= 91):
    //         Grades.a++;
    //         break;
    //     case (grade >= 81 && grade <= 90):
    //         Grades.b++;
    //         break;
    //     case (grade >= 71 && grade <= 80):
    //     Grades.c++;
    //         break;
    //     case (grade >= 61 && grade <= 70):
    //     Grades.d++;
    //         break;
    //     case (grade >= 50 && grade <= 60):
    //     Grades.f++;
    //         break;
    //     default:
    //         console.log("Invalid score");
    //         break;
    // }
}

//     if ( Grades.lowest > scores[i] ) {
//         Grades.lowest = scores[i];
//     }

//     if ( Grades.highest < scores[i] ) {
//         Grades.highest = scores[i];
//     }
// }

console.log("Total As: ", Grades.a);
console.log("Total Bs: ", Grades.b);
console.log("Total Cs: ", Grades.c);
console.log("Total Ds: ", Grades.d);
console.log("Total Fs: ", Grades.f);

// what is the lowest grade

console.log("Lowest Grade: ", Grades.lowest); // 55

// what is the highest grade

console.log("Highest Grade: ", Grades.highest);

console.log("Lowest grade: ", Math.min.apply(null, scores));
console.log("Highest grade: ", Math.max.apply(null, scores));