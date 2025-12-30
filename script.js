function explore() {
  const city = document.getElementById("citySelect").value;
  if (!city) {
    alert("Please select a city");
    return;
  }
  alert(`Showing opportunities in ${city} (dynamic later)`);
}
