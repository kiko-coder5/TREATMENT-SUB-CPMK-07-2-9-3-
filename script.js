/* ===========================
   NAVBAR
=========================== */

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

hamburger.addEventListener("click", function(){

    navLinks.classList.toggle("show");

});


/* ===========================
   SMOOTH SCROLL
=========================== */

function scrollToSection(id){

    document.querySelector(id).scrollIntoView({
        behavior : "smooth"
    });

}


/* ===========================
   FORM
=========================== */

const form = document.getElementById("serviceForm");
const tableBody = document.getElementById("tableBody");

let selectedRow = null;
let nomor = 1;

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(validasiForm()){

        if(selectedRow == null){

            tambahData();

        }else{

            updateData();

        }

        form.reset();
        selectedRow = null;

    }

});


/* ===========================
   VALIDASI
=========================== */

function validasiForm(){

    let nama = document.getElementById("nama").value;
    let divisi = document.getElementById("divisi").value;
    let layanan = document.getElementById("layanan").value;
    let prioritas = document.getElementById("prioritas").value;
    let deskripsi = document.getElementById("deskripsi").value;

    if(
        nama == "" ||
        divisi == "" ||
        layanan == "" ||
        prioritas == "" ||
        deskripsi == ""
    ){

        alert("Semua data harus diisi!");

        return false;

    }

    return true;

}

/* ===========================
   TAMBAH DATA
=========================== */

function tambahData(){

    let row = tableBody.insertRow();

    let nama = document.getElementById("nama").value;
    let divisi = document.getElementById("divisi").value;
    let layanan = document.getElementById("layanan").value;
    let prioritas = document.getElementById("prioritas").value;
    let deskripsi = document.getElementById("deskripsi").value;

    row.insertCell(0).innerHTML = nomor++;
    row.insertCell(1).innerHTML = nama;
    row.insertCell(2).innerHTML = divisi;
    row.insertCell(3).innerHTML = layanan;
    row.insertCell(4).innerHTML = prioritas;
    row.insertCell(5).innerHTML = deskripsi;

    row.insertCell(6).innerHTML =
    `
        <button class="edit-btn" onclick="editData(this)">Edit</button>
        <button class="delete-btn" onclick="hapusData(this)">Hapus</button>
    `;

}


/* ===========================
   EDIT DATA
=========================== */

function editData(button){

    selectedRow = button.parentElement.parentElement;

    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("divisi").value = selectedRow.cells[2].innerHTML;
    document.getElementById("layanan").value = selectedRow.cells[3].innerHTML;
    document.getElementById("prioritas").value = selectedRow.cells[4].innerHTML;
    document.getElementById("deskripsi").value = selectedRow.cells[5].innerHTML;

}

/* ===========================
   UPDATE DATA
=========================== */

function updateData(){

    selectedRow.cells[1].innerHTML = document.getElementById("nama").value;
    selectedRow.cells[2].innerHTML = document.getElementById("divisi").value;
    selectedRow.cells[3].innerHTML = document.getElementById("layanan").value;
    selectedRow.cells[4].innerHTML = document.getElementById("prioritas").value;
    selectedRow.cells[5].innerHTML = document.getElementById("deskripsi").value;

    alert("Data berhasil diperbarui.");

}


/* ===========================
   HAPUS DATA
=========================== */

function hapusData(button){

    if(confirm("Yakin ingin menghapus data ini?")){

        let row = button.parentElement.parentElement;

        row.remove();

        updateNomor();

    }

}


/* ===========================
   UPDATE NOMOR
=========================== */

function updateNomor(){

    let rows = tableBody.rows;

    nomor = 1;

    for(let i = 0; i < rows.length; i++){

        rows[i].cells[0].innerHTML = nomor++;

    }

}