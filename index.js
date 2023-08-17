function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")}
<small>${losAngelesTime.format("A")}</small>`;

  // Porto
  let portoElement = document.querySelector("#porto");
  let portoDateElement = portoElement.querySelector(".date");
  let portoTimeElement = portoElement.querySelector(".time");
  let portoTime = moment().tz("Europe/Porto");

  portoDateElement.innerHTML = portoTime.format("dddd Do MMMM YYYY");
  portoTimeElement.innerHTML = `${portoTime.format("h:mm:ss")}
<small>${portoTime.format("A")}</small>`;

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format("h:mm:ss")}
<small>${sydneyTime.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
