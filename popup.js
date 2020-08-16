let numberDisplay = document.getElementById('number');
let numberSection = document.getElementById('numberColumn');
let resultSection = document.getElementById('resultColumn');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let content = document.getElementById('content');

let number;
let color;

chrome.storage.sync.get('number', function(data) {
  number = data.number;
  refreshTable();
});

chrome.storage.sync.get('color', function(data) {
  color = data.color;
  refreshTable();
});

function refreshTable() {
  content.style.backgroundImage = 'repeating-linear-gradient(' + color + ' 0px, ' + color + ' 24px, teal 25px)'
  numberDisplay.innerHTML = number;
  numberSection.innerHTML = "";
  resultSection.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    numberSection.innerHTML += "<div>" + number + "</div>";
    resultSection.innerHTML += "<div>" + number * i + "</div>";
  }
}

function storeNumber() {
  chrome.storage.sync.set({number: number}, function() {
    console.log('New number is ' + number);
  })
}

prevButton.addEventListener("click", function() {
  number--;
  refreshTable();
  storeNumber();
});

nextButton.addEventListener("click", function() {
  number++;
  refreshTable();
  storeNumber();
});
