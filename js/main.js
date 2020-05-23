/*
async function getFunction() {
  return await fetch("../json/list.json").then((response) => response.json());
}
console.log(await getFunction);
*/

async function main() {
  const result = await get();
  console.log(result);
  updateTable(result.items);
}
async function get() {
  return await fetch("https://api.typeform.com/forms", {
    headers: {
      Authorization: "Bearer B9F2AmcV1BEvEMgSrBMdLhgjnxJszME8yKKHELB9wdVe",
    },
  }).then((response) => response.json());
}
main();

const table = document.getElementById("table");

function updateTable(results) {
  results.forEach((result) => {
    const row = document.createElement("tr");

    const title = document.createElement("td");
    title.innerText = result.title;
    row.appendChild(title);

    const href = document.createElement("td");
    href.innerText = result.href;
    row.appendChild(href);

    const remove = document.createElement("td");
    const removeLink = document.createElement("a");
    removeLink.innerText = "Remove";
    removeLink.setAttribute("href", "#");
    remove.appendChild(removeLink);
    row.appendChild(remove);

    table.appendChild(row);
  });
}
