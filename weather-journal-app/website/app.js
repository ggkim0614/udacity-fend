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
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`;

  fetch(baseURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      postData("/addData", {
        temp: data.main.temp,
        date: newDate,
        content: userResponse,
      }).catch((e) => {});

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
  const request = await fetch("/");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("temp").innerHTML = allData[0].temp;
    document.getElementById("date").innerHTML = allData[0].date;
    document.getElementById("content").innerHTML = allData[0].content;
  } catch (error) {
    console.log("error", error);
  }
};
