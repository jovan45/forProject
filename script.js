let person = {
    name:"jovan",
    lastName:"plevnaroski",
    married: false,
    phones: ["07125631631", "02167417371", "081473214189321"]
};

let ulTag = document.getElementById("listaTel")

console.log("Name =" + person.name);

for(let i = 0; i < person.phones.length; i++){
  let phoneItem = document.createElement("li")
  ulTag.appendChild(phoneItem);
  phoneItem.innerHTML = person.phones[i];
}
