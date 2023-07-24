const requestURL = "http://127.0.0.1:3000";

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("POST", requestURL + "/garage");

xhr.onload = () => {
  console.log(xhr.response);
};
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ name: "renault", color: "blue" }));

/* fetch(requestURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(userInfo),
});
 */
