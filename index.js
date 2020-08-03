const formProduct = ()=>{
    let table = document.getElementById("produk"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3);
    
    let nama = document.getElementById("name").value;
    let harga = document.getElementById("price").value;
    let kategori = document.getElementById("category").value;
    let kondisi = document.querySelector('input[name = condition]:checked').value

    cell1.innerHTML = nama;
    cell2.innerHTML = harga;
    cell3.innerHTML = kondisi;
    cell4.innerHTML = kategori;
}

const formHewan=()=>{
    let table = document.getElementById("animal"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3);

    let namaH = document.getElementById("nameH").value
    let hargaH = document.getElementById("umurH").value
    let sexH = document.querySelector("input[name = sex]:checked").value
    let statusH = document.querySelector("input[name = stat]:checked").value

    cell1.innerHTML = namaH;
    cell2.innerHTML = hargaH;
    cell3.innerHTML = sexH;
    cell4.innerHTML = statusH;
}