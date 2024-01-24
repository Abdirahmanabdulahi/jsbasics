
const FlagST = {
    Banaadir: 'banaadirFlag',
    Jubaland: 'JubalandFlag',
    Soomaliland: 'SoomalilandFlag',
    Hirshabeele: 'HirshabeeleFlag',
    Galmudug: 'GalmudugFlag',
    KonfurGalbeed: 'KonfurGalbeedFlag',
    Puntland: 'PuntlandFlag',
    Khaatumo: 'KhaatumoFlag'
};

function StageFlag() {
    const Stageselect = document.getElementById('Stage');
    const flagimage = document.getElementById('flagimage');
    const selectedStage = Stageselect.options[Stageselect.selectedIndex].value;

    // Hide all flags
    const flags = flagimage.querySelectorAll('.flag');
    flags.forEach((flag) => {
        flag.style.display = 'none';
    });

    // Show the selected flag
    const flag = FlagST[selectedStage];
    const selectedFlag = flagimage.querySelector(`[data-flag="${flag}"]`);
    if (selectedFlag) {
        selectedFlag.style.display = 'block';
    }
}





// const FlagST = {
//     Banaadir: 'banaadirFlag',
//     Jubaland: 'JubalanFlag',
//     Soomaliland: 'SoomalilandFlag',
//     Hirshabeele: 'HirshabeeleFlag',
//     Galmudug: 'GalmudugFlag',
//     KonfurGalbeed: 'KonfurGalbeedFlag',
//     Puntland: 'PuntlandFlag',
//    };   

// function StageFlag() {
//     const Stageselect = document.getElementById('Stage');
//     const flagInput = document.getElementById('flag');
//     const selectedStage = Stageselect.options[Stageselect.selectedIndex].value;

//     // Get the corresponding city for the selected district
//     const flag = FlagST[selectedStage];

//     // Set the city in the input field
//     flagInput.value = flag;
// }



// const formEl = document.querySelector("form")
// const selectEl = document.getElementById("search-select")
// const SresultEl = document.querySelector(".S-result")

// let selectData= "";

// function StageFlag() {
// selectData=selectEl.value;
// console.log("submitted");
// }


// formEl.addEventListener("submit"), (event) => {
//     event.preventDefault();
//     console.log("selectData");
//     StageFlag();
// }