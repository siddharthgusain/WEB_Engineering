const personName = document.getElementById("name");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
const clickButton = document.getElementById("clickButton");

//
function setAlarm(name, delay) {
    let promise = new Promise(
        (resolve, reject) => {
            if (delay < 0)
                throw new Error("Wrong delay"); // or reject("Wrong delay")

            setTimeout(() => {
                resolve(`Wake up ${name}`);
            }, delay);

        }
    );

    return promise;
}

// without async await
clickButton.addEventListener("click", () => {
    const promise = setAlarm(personName.value, delay.value); // returns promise
    promise.then((msg) => {
        output.innerText = msg;
    })
});

//with async await "cleaner way" of writing code
clickButton.addEventListener("click", async () => {
    const msg = await setAlarm(personName.value, delay.value);
    output.innerText = msg;
})


