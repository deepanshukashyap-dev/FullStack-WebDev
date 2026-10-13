// const form = document.getElementById('promptForm');
const inputPrompt = document.getElementById("prompt");
const answer = document.getElementById("response");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
  const prompt = inputPrompt.value;
  const response = await fetch("/api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  });

  console.log("Raw response: ", response); //isliye fetch sirf body nahi, poora HTTP response packet deta hai.

  const data = await response.json(); //http(from fetch) ko JS object banaya jaata hai
// Socho tumne Amazon se parcel order kiya.

// Parcel ke andar:

// 📦 Product (ye = backend ka res.json())

// Parcel ke upar:

// 🏷️ Tracking number

// 🏷️ Delivered / Failed

// 🏷️ COD / Paid

// 🏷️ Address

// 🏷️ Date

// 👉 Tum sirf product nahi, poora parcel receive karte ho

// fetch = poora parcel
// response.json() = sirf product nikalna

  console.log("Data from server(body): ", data); //converted js object

  console.log(data.response); //data.response here response is backend keyword , data ke andar response

  answer.innerText = data.response; //this is from the backend
});
