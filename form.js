// function calculateGrade() {
//     marks = document.getElementById('marks').value;
//     grade = '';
//     if (marks > 100) {
//         grade = 'invailed marks';
//     } else if (marks >= 90 && marks <= 100) {
//         grade  = 'A'; 
//     } else if (marks >= 80 && marks <= 89) {
//         grade = 'B';
//     } else if (marks >= 70 && marks <= 79) {
//         grade = 'C';
//     } else if (marks >= 60 && marks <= 69) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }
//     document.getElementById('grade').value = grade;
// }
function calculateGrade() {
    var marks = document.getElementById('marks').value;
    var grade = '';

    if (marks > 100) {
        grade = 'Invalid marks';
    } else if (marks >= 90 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 80 && marks <= 89) {
        grade = 'B';
    } else if (marks >= 70 && marks <= 79) {
        grade = 'C';
    } else if (marks >= 60 && marks <= 69) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('grade').value = grade;

    // Apply different colors based on the grade
    document.getElementById('grade').className = 'grade' + grade;
}


function getAge() {
    bdate = document.getElementById('bdate').value;

    age = 2023 -  bdate;

    document.getElementById('age').value = age;
}


const districtCity = {
    boondheere: 'banaadir',
        cabdicaziiz: 'banaadir',
        dharkenley: 'banaadir',
        dayniile: 'banaadir',
        hodan: 'banaadir',
        howlwadaag: 'banaadir',
        heliwaa: 'banaadir',
        kaaraan: 'banaadir',
        kaxda: 'banaadir',
        shibis: 'banaadir',
        wadajira:  'banaadir',
        shangaani: 'banaadir',
        waaberi: 'banaadir',
        wardhiigley: 'banaadir',
        xamarweyne: 'banaadir',
        xamarjajab: 'banaadir',
        // hodan: 'banaadir',
        cadaado: 'mudug',
        caabuudwaaq: 'mudug',
        ceelbuur: 'mudug',
        ceeldheere: 'mudug',
        dhuusamreeb: 'mudug',
        gaalkacyo: 'mudug',
        galdogob: 'mudug',
        hobyo: 'mudug',
        jariiban: 'mudug',
        xarardheere: 'mudug',
        // dhuusamreeb: 'mudug',
        beladweyn: 'hiiraan',
        buulabarde: 'hiiraan',
        jalalaqsi: 'hiiraan',
        matabaan: 'hiiraan',
        maxaas: 'hiiraan',
        // beladweyn: 'hiiraan',
        baardheere: 'Gedo',
        beladxaawo: 'Gedo',
        ceelwaq: 'Gedo',
        doolow: 'Gedo',
        garbahaarey: 'Gedo',
        luuq: 'Gedo',
        // luuq: 'Gedo',
        aadanyabaal: 'sh.dhexe',
        balcad: 'sh.dhexe',
        cadale: 'sh.dhexe',
        jawhar: 'sh.dhexe',
        mahadaay: 'sh.dhexe',
        runrugood: 'sh.dhexe',
        warshiikh: 'sh.dhexe',
        // warshiikh: 'sh.dhexe',
        afgooye: 'sh.hoose',
        awdhiigle: 'sh.hoose',
        baraawe: 'sh.hoose',
        janaale: 'sh.hoose',
        // marka: 'sh.hoose',
        baydhabo: 'Bay',
        buurhakabo: 'Bay',
        diinsoor: 'Bay',
        bardaale: 'Bay',
        qansaxdheere: 'Bay',
        // marka: 'Bay',
        biyooley: 'Bakool',
        celbarde: 'Bakool',
        xudur: 'Bakool',
        rabdhuure: 'Bakool',
        tiyeglow: 'Bakool',
        // marka: 'Bakool',
        buaale: 'J.dhexe',
        dujuma: 'J.dhexe',
        jilib: 'J.dhexe',
        saakow: 'J.dhexe',
        // marka: 'J.dhexe',
        afmadow: 'J.hoose',
        badhaadhe: 'J.hoose',
        jamaame: 'J.hoose',
        xagar: 'J.hoose',
        kismaayo: 'J.hoose',
        // marka: 'J.hoose',
    // Add more districts and cities as needed
};


const FlagST = {
 Banaadir: 'banaadirFlag',
 Jubaland: 'JubalanFlag',
 Soomaliland: 'SoomalilandFlag',
 Hirshabeele: 'HirshabeeleFlag',
 Galmudug: 'GalmudugFlag',
 KonfurGalbeed: 'KonfurGalbeedFlag',
 Puntland: 'PuntlandFlag',
};

function populateDistricts() {
    const districtSelect = document.getElementById('district');
    const cityInput = document.getElementById('city');
    const selectedDistrict = districtSelect.options[districtSelect.selectedIndex].value;

    // Get the corresponding city for the selected district
    const city = districtCity[selectedDistrict];

    // Set the city in the input field
    cityInput.value = city;
}

function StageFlag() {
    const Stageselect = document.getElementById('Stage');
    const flagInput = document.getElementById('flag');
    const selectedStage = Stageselect.options[Stageselect.selectedIndex].value;

    // Get the corresponding city for the selected district
    const flag = FlagST[selectedStage];

    // Set the city in the input field
    flagInput.value = flag;
}
