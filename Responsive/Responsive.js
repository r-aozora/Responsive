document.getElementById('btn').addEventListener('click', function(){
    let nama = document.getElementById('nama').value
    let kelas = document.getElementById('kelas').value
    let alamat = document.getElementById('alamat').value
    let tentangKamu = document.getElementById('tentang-kamu').value

    alert('Hi, ' + nama)
    alert('Kelas: ' + kelas)
    alert('Alamat: ' + alamat)
    alert('Tentang Kamu: ' + tentangKamu)
})