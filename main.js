console.log("Main.js working");

const populate = async (value, currency) => { // Mark function as async
    let myStr = "";
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_wTCwf7gNMbfLQsrYAGYaYzaQjaYBf2yRjfCENYO0&base_currency=" + currency;
    const response = await fetch(url); // This line now works because populate is async
    const rjson = await response.json();
    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(rjson["data"])) {
        myStr += `
            <tr>
                <td>${key}</td>
                <td>${rjson["data"][key]["code"]}</td>
                <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
            </tr>
        `;
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
};

const btn = document.querySelector('.btn');
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency); // Calls the async function
});
