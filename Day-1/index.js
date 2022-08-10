const app = document.getElementById("app");
const btnUbah = document.getElementById("btnHewan");
const img = document.getElementById("gmbr");
const input = document.getElementById("input");

const generateHewan = ( ) => {
    let result = input.value.toUpperCase();

    if (result == "BURUNG"){
        img.src = "./burung.jpg";
    }

    else if (result == "HARIMAU"){
        img.src = "./harimau.jpg";
    }

    else if (result == "KUCING"){
        img.src = "./kucing.jpg";
    }

    else{
        img.src = "./manusia.jpg";
    }

};

btnUbah.addEventListener("click", generateHewan);