
function check() {
    let char = document.getElementById("charInput").value.toLowerCase();
    let output = document.getElementById("output");

    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        output.innerHTML = "It is a Vowel";
    } else if (char === "") {
        output.innerHTML = "Please enter something";
    } else {
        output.innerHTML = "It is a Consonant";
    }
}
