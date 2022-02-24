let data = new Date();
document.getElementById("date").innerHTML = data.toString();

first = () => {
  document.calc.txt.value = "";
};

second = () => {
  let x = document.getElementById("text");
  x.value = x.value.slice(0, -1);
};

third = () => {
  document.calc.txt.value += "%";
};

fourth = () => {
  document.calc.txt.value += "/";
};

fifth = () => {
  document.calc.txt.value += "7";
};

sixth = () => {
  document.calc.txt.value += "8";
};

seventh = () => {
  document.calc.txt.value += "9";
};

eight = () => {
  document.calc.txt.value += "*";
};

nineth = () => {
  document.calc.txt.value += "4";
};

tenth = () => {
  document.calc.txt.value += "5";
};

eleventh = () => {
  document.calc.txt.value += "6";
};

twelveth = () => {
  document.calc.txt.value += "-";
};

thirteenth = () => {
  document.calc.txt.value += "1";
};

fourteenth = () => {
  document.calc.txt.value += "2";
};

fifteenth = () => {
  document.calc.txt.value += "3";
};

sixteenth = () => {
  document.calc.txt.value += "+";
};

seventeenth = () => {
  document.calc.txt.value += "0";
};

eighteenth = () => {
  document.calc.txt.value += ".";
};

nineteenth = () => {
  document.calc.txt.value = eval(calc.txt.value);
};
