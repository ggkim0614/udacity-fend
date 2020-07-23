/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", performAction);

async function performAction(e) {
  console.log(e);
  const zip = document.getElementById("zip").value;
  const userResponse = document.getElementById("feelings").value;

  const apiKey = "a45586e199e6495ee5d1bc591e78f907";
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=`;

  fetch(baseURL + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      postData("/addData", {
        name: data.name,
        temp: data.main.temp,
        date: newDate,
        content: userResponse,
      }).catch((error) => {
        console.log("error", error);
      });

      updateUI();
    });
}

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async () => {
  const request = await fetch("/getData");
  const allData = await request.json();
  console.log(allData.name);
  try {
    console.log(allData, "allData");

    // Change kelvin to celsius
    const celsiusTemp = Math.trunc(
      parseInt(allData[allData.length - 1].temp) - 273.15
    );
    document.getElementById("name").innerHTML =
      allData[allData.length - 1].name;
    document.getElementById("temp").innerHTML =
      "Temperature: " + celsiusTemp + " °C";
    document.getElementById("date").innerHTML =
      "Date: " + allData[allData.length - 1].date;
    document.getElementById("content").innerHTML =
      allData[allData.length - 1].content;
  } catch (error) {
    console.log("error", error);
  }
};
