function  terimainput(){
  var a=document.forms['Silsilahkeluarga']['namalengkap'].value;
  var b=document.forms['Silsilahkeluarga']['nik'].value;
  var c=document.forms['Silsilahkeluarga']['kota'].value;
  var d=document.forms['Silsilahkeluarga']['tanggal'].value;
  var e=document.forms['Silsilahkeluarga']['jeniskel'].value;
  var f=document.forms['Silsilahkeluarga']['status'].value;
  var g=document.forms['Silsilahkeluarga']['namasuamiistri'].value;
  var h=document.forms['Silsilahkeluarga']['namaayah'].value;
  var i=document.forms['Silsilahkeluarga']['namaibu'].value;
  var j=document.forms['Silsilahkeluarga']['anakke'].value;
  var k=document.forms['Silsilahkeluarga']['nohp'].value;
  var l=document.forms['Silsilahkeluarga']['alamat'].value;
  var m=document.forms['Silsilahkeluarga']['email'].value;

  if (a=="") {
    alert("nama wajib diisi");
  }
  if (b=="") {
    alert("nik wajib diisi");
  }
  if (c=="") {
    alert("kota wajib diisi");
  }
  if (d=="") {
    alert("tanggal wajib diisi");
  }
  if (e=="") {
    alert("jenis kelamin wajib diisi");
  }
  if (k=="") {
    alert("no hp wajib diisi");
  }
  if (l=="") {
    alert("alamat wajib diisi");
  }

  var tabel = document.getElementById("Silsilahkeluarga")
  var row = tabel.insertRow(2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);
  var cell13 = row.insertCell(12);
  var cell14 = row.insertCell(13);

  cell1.innerHTML = a;
  cell2.innerHTML = b;
  cell3.innerHTML = c;
  cell4.innerHTML = d;
  cell5.innerHTML = e;
  cell6.innerHTML = f;
  cell7.innerHTML = g;
  cell8.innerHTML = h;
  cell9.innerHTML = i;
  cell10.innerHTML = j;
  cell11.innerHTML = k;
  cell12.innerHTML = l;
  cell13.innerHTML = m;
}
