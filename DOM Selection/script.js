// Untuk hasil buka di console inspect element
// Get Element By Id
const judul = document.getElementById("judul");
console.log("Judul (getElementById) " + judul);

// Memanipulasi Judul dengan DOM
judul.style.color = "red";
judul.style.backgroundColor = "lightblue";
judul.style.textAlign = "center";
judul.innerHTML = "Ini Adalah Judul";

// Get Element By TagName
const paragraf = document.getElementsByTagName("p");
// Mengembalikan nilai dalam bentuk Array sebanyak jumlah (length) tag p pada html
console.log(paragraf);

// Memanipulasi Tag P dengan DOM
paragraf[0].style.color = "lightgreen";
paragraf[1].style.color = "blue";
paragraf[2].style.color = "yellow";
paragraf[3].style.color = "violet";

// Atau bisa menggunakan looping
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = "gray";
}

// Menangkap element dengan tagname dengan index tertentu saja
const paragraf1 = document.getElementsByTagName("p")[0];
console.log("ini adalah paragraf 1 tagname p index ke-0 + \n" + paragraf1);

// Memanipulasi variabel paragraf1
paragraf1.innerHTML = "Ini adalah Sub-Judul";

// Get Element By ClassName
const paragraf2 = document.getElementsByClassName("p2")[0];
// Mengembalikan nilai dalam bentuk Array sebanyak jumlah (length) classname p2 pada html
console.log("Paragraf 2 (getElementsByClassName) " + paragraf2);

// Memanipulasi variabel paragraf2 dengan DOM
paragraf2.innerHTML = "Ini Paragraf 2 Diubah dengan DOM";
paragraf2.style.textAlign = "center";

// QuerySelector()
// Selector dengan menggunakan Selector CSS untuk satu element
const paragraf4 = document.querySelector("#b p");
// Mengembalikan nilai dalam bentuk Element html
console.log("Paragraf 4 (Query Selector)" + paragraf4);

// Memanpulasi paragraf4 dengan DOM
paragraf4.style.textAlign = "center";
paragraf4.style.fontWeight = "bold";
paragraf4.innerHTML = "Ini Diubah menggunakan Query Selector";

const listitem2 = document.querySelector("section#b ul li:nth-child(2)");
// Mengembalikan nilai dalam bentuk Element html
console.log("List Item 2 (Query Selector)" + listitem2);

// Memanpulasi List Item 2 dengan DOM
listitem2.style.backgroundColor = "orange";
listitem2.style.textAlign = "right";

// QuerySelectorAll()
// Selector dengan menggunakan Selector CSS tapi untuk semua element
const listitem = document.querySelectorAll("section#b ul li");
// Mengembalikan nilai dalam bentuk NodeList (Samam seperti array)
// untuk semua item li pada section #b di html
console.log("List Item (Query Selector All)" + listitem);

// Memanpulasi List Item dengan DOM (Harus menyertakan index karena NodeList)
listitem[0].style.textAlign = "center";
listitem[1].style.textAlign = "center";
listitem[2].style.textAlign = "center";

// Bisa juga menggunakan Looping
for (let i = 0; i < listitem.length; i++) {
    listitem[i].style.color = "blue";
}

// Note
// Disarankan Menggunakan By Id atau ByTagName
// document.getElementById("");
// document.getElementsByTagName("");
// document.getElementsByClassName("");
// document.querySelector("");
// document.querySelectorAll("");

// Mengubah Node Root (scope object)
// Biasanya menggunakan QuerySelector ataupun get by Id
const sectionbawah = document.getElementById("b");
// Maka untuk mengubah element didalam Section B cukup menggunakan
// Node section bawah tidak usah menggunakan document
const listitemnoderoot = sectionbawah.getElementsByTagName("li");
for (let i = 0; i < listitemnoderoot.length; i++) {
    listitemnoderoot[i].style.backgroundColor = "pink";
    listitemnoderoot[i].style.fontWeight = "bold";
}
