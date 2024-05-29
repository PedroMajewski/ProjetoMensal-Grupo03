document.addEventListener('DOMContentLoaded', function() {
    const profissionalLabel = document.querySelector('label[for="profissional"]');
    const dropdown = document.getElementById('dropdownProfissional'); 
    const profissionalInput = document.getElementById('profissional');

    
    profissionalLabel.addEventListener('click', function() {
        if (dropdown.style.display === "none") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    });

    
    dropdown.addEventListener('click', function(event) {
        if (event.target.tagName === 'OPTION') {
            profissionalInput.value = event.target.value;
            dropdown.style.display = "none";
        }
    });


    document.addEventListener('click', function(event) {
        if (!profissionalLabel.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});

// codigo drowpdown prof


