const App = {
  $: {
    dayInput: document.querySelector("[id='day']"),
    monthInput: document.querySelector("[id='month']"),
    yearInput: document.querySelector("[id='year']"),

    dayError: document.querySelector("small.error-day"),
    monthError: document.querySelector("small.error-month"),
    yearError: document.querySelector("small.error-year"),

    dayText: document.querySelector("[class='output-day']"),
    monthText: document.querySelector("[class='output-month']"),
    yearText: document.querySelector("[class='output-year']"),
  },

  init() {
    this.$.yearError.innerHTML = "";
    this.$.monthError.innerHTML = "";
    this.$.dayError.innerHTML = "";

    day = +this.$.dayInput.value;
    month = +this.$.monthInput.value;
    year = +this.$.yearInput.value;
    any = false;
    d = new Date();

    if (year == 0) {
      this.$.yearInput.focus();
      this.$.yearError.innerHTML = "Please fill this field";
      this.$.yearError.classList.toggle("hide");
      this.$.yearInput.classList("red");
      this.$.yearInput.classList("border-red");
      any = true;
    } else if (year < 1900 || year > +d.getFullYear()) {
      this.$.yearInput.focus();
      this.$.yearError.innerHTML = "The numer is out of range";
      this.$.yearError.classList.toggle("hide");
      this.$.yearInput.classList.toggle("red");
      this.$.yearInput.classList.toggle("border-red");
      any = true;
    }
    if (month == 0) {
      this.$.monthInput.focus();
      this.$.monthError.innerHTML = "Please fill this field";
      this.$.monthError.classList.toggle("hide");
      any = true;
      this.$.monthInput.classList.toggle("red");
      this.$.monthInput.classList.toggle("border-red");
    } else if (month < 0 || month > 12) {
      this.$.monthInput.focus();
      this.$.monthError.innerHTML = "The number is out of range";
      this.$.monthError.classList.toggle("hide");
      any = true;

      this.$.monthInput.classList.toggle("red");
      this.$.monthInput.classList.toggle("border-red");
    }
    if (day == 0) {
      this.$.dayInput.focus();
      this.$.dayError.innerHTML = "Please fill this field";
      this.$.dayError.classList.toggle("hide");
      any = true;
      this.$.dayInput.classList.toggle("red");

      this.$.dayInput.classList.toggle("border-red");
    }

    d = new Date(year, month, 0);
    d = d.getDate();
    if (day < 0 || day > d) {
      this.$.dayInput.focus();
      this.$.dayError.innerHTML = "The number is out of range";
      this.$.dayError.classList.toggle("hide");
      any = true;
      this.$.dayInput.classList.toggle("red");
      this.$.dayInput.classList.toggle("border-red");
    }

    if (!any) {
      d1 = new Date();
      d2 = new Date(year, month, day);
      d = new Date(d1 - d2);

      this.$.dayText.innerHTML = d.getDate() - 1;
      this.$.monthText.innerHTML = d.getMonth();
      this.$.yearText.innerHTML = d.getFullYear() - 1970;

      [this.$.dayInput, this.$.monthInput, this.$.yearInput].forEach(
        (element) => {
          if (element.classList.contains("red"))
            element.classList.remove("red");

          if (element.classList.contains("border-red"))
            element.classList.remove("border-red");
        }
      );
    }
  },
};

document.querySelector("button").addEventListener("click", (event) => {
  App.init();
});
