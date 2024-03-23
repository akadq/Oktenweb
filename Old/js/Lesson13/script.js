function wakeUp(timeNow) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeNow) {
                resolve("on the foots");
            } else {
                reject("Still lying on the bed");
            }
        }, 1200)
    });
}

function breakfest(isBreakfest) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBreakfest) {
                resolve("I\`m not hungry");
            } else {
                reject("I\`m hungry");
            }
        }, 800);
    })
}

function sport(isWorkout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkout) {
                resolve("Done with workout");
            } else {
                reject("I\`m to lasy for workout");
            }
        }, 700);
    })
}

function oktenScjool(isLearn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLearn) {
                resolve("I\`m studied something new");
            } else {
                reject("I\`m become more stupid");
            }
        }, 600);
    })

}

async function myDay() {
    try {
        const wake = await wakeUp(true);
        console.log(`Yes, i am`, wake);

        const meal = await breakfest(false);
        console.log(meal);

        const workout = await sport(true);
        console.log(workout);

        const study = await oktenScjool(true);
        console.log(study);
    } catch (e) {
        console.warn(e);
    }
}

myDay();