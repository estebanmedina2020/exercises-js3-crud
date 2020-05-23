/*
async function getFunction() {
  return await fetch("../json/list.json").then((response) => response.json());
}
console.log(await getFunction);
*/

async function main() {
  const result = await get();
  console.log(result);
  updateTable(result);
}
async function get() {
  return await fetch("../json/list.json").then((response) => response.json());
}
main();

const table = document.getElementById("table");

function updateTable(results) {
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerText = result.title;
    table.appendChild(row);
  });
}
