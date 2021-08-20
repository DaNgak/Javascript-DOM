// Manipulasi DOM
// Secara umum ada 4 method

// element.innerHTML
// element.style.<property>
// element.setAttribute()
// element.classList

// element.innerHTML
// innerHTML digunakan untuk megganti elemen yang ada di tag tertentu
// dengan tulisan ataupun tag html lainnya
const judul = document.getElementById("judul");
// Memanpulasi judul dengan DOM
judul.innerHTML = "<strong>Ini diubah dengan Inner HTML<strong>";

// Mengganti isi element dengan innerHTML
const induklist = document.querySelector("section#b ul");
induklist.innerHTML = "<div>Listnya diganti dengan <a href='#'>hello world</a></div>";

// element.style.<property>
// element.style.<property> digunakan untuk memanipulasi style pada element html yang dipilih oleh selector
const link = document.getElementsByTagName("a");

//  Memanipulasi link dengan DOM
for (let i = 0; i < link.length; i++) {
    link[i].style.padding = "10px";
    link[i].style.borderRadius = "10px";
    link[i].style.border = "1px solid blue";
}

// Atribute
// ada 3 macam set atribute yaitu
// element.getAttribute() => untuk mengetahui isi dari atribute yang ada didalam tag
// element.setAttribute() => untuk menambahkan atribute kedalam tag yang dipilih / selection
// element.removeAttribute() => untuk menghapus atribute pada dalam tag yang di pilih

// element.setAttribute()
const paragrafpertama = document.querySelector("section#a p.p1");
paragrafpertama.setAttribute("id", "judul-utama"); // Menambahkan id judul pada h1 didalam section dengan id a(#a)

// element.getAttribute()
const linksectiona = document.getElementsByTagName("a")[0];
console.log(linksectiona.getAttribute("href")); // Mengetahui isi dari dari atribute href pada tag a yang pertama
console.log(paragrafpertama.getAttribute("id")); // Mengetahui isi attribute id pada tag p1 / paragragpertama

// element.removeAttribute()
const alltaglink = document.querySelectorAll("a");
for (let index = 0; index < alltaglink.length; index++) {
    alltaglink[index].removeAttribute("href"); // Menghapus atribut href dari semua link dengan variabel link diatas
}

// ClassList
// Digunakan untuk memanipulasi class (menambah /  menghapus suatu class)
ww