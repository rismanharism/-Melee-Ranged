let str = 'Razor-Ranged,Meepo-Melee,Invoker-Ranged'

function splitting(str) { // function untuk split patoka ,
    let result = [] // output atau hasil dari function splitting(str)
    let text = ""  // untuk menampung 
    for (let i = 0; i < str.length + 1; i++) {  // ngeloop perhuruf dan menambah panjang str di tambah 1 (untuk patokan split)
        if (str[i] === "," || str[i] === undefined) { // jika kondisi ketemu string , atau undefined (dari str di tambah 1 menjadi undefined)
            result.push(text);  // MENAMBAHKAN ARRAY RESULT DARI TEXT ‘Razor-Ranged’, ‘Meepo-Melee’, ‘Invoker-Ranged’
            text = "" // KEGUNAANYA UNTUK TEXT YG MU DI INPUT DI BATAS ATAU DI ULANG DARI KOSONG LAGOI
        } else {
            text += str[i] // JIKA TIDAK KETEMU kondisi apapun , MAKA HURUF2 DIMASUKAN KE TEXT
        }
    }
    return result;  // MENGEMBALIKAN RESULT ATAU UNTUK DI PANGGI ATAU DI GUNAKAN PROSES
}                   // OUTPUT [‘Razor-Ranged’, ‘Meepo-Melee’, ‘Invoker-Ranged’]
function meleeRangedGrouping(str) { // function untuk split patoka -
    if (!str) {   // JIKA BUKAN STR
        return [] // MENGEMBALIKAN []
    }
    let splitResult = splitting(str) // MERUBAH NAMA FUNCTION splitting(str)
    let result = []
    let temp = []
    let text = ""
    for (let i = 0; i < splitResult.length; i++) { // ngeloop per kalimat
        for (let j = 0; j < splitResult[i].length + 1; j++) { // ngeloop per huruf dan menambah panjang huruf untuk patokan split di akhir
            if (splitResult[i][j] === "-" || splitResult[i][j] === undefined) { // jika kondisi ketemu string - atau undefined (dari splitResult di tambah 1 menjadi undefined)
                temp.push(text); // menambahkan text atau huruf2 kedalam temp atau penampung ['Razor','Ranged'],['Invoker','Ranged'],['Meepo','Melee']
                text = "" // KEGUNAANYA UNTUK TEXT YG MU DI INPUT DI BATAS ATAU DI ULANG DARI KOSONG LAGi
            } else {
                text += splitResult[i][j] //JIKA TIDAK KETEMU kondisi apapun , MAKA HURUF2 DIMASUKAN KE TEXT
            }
        }
        result.push(temp); // [['Razor','Ranged'],['Invoker','Ranged'],['Meepo','Melee']]
        temp = []   // setelah di input atau di masukan ke result maka temp kembali kosong
    }
    let output = []
    let melee = []
    let ranged = []
    for (let i = 0; i < result.length; i++) { // looping pertama untuk memilih ['Razor','Ranged'],['Invoker','Ranged'],['Meepo','Melee']
        if (result[i][1] === "Melee") {   // jika result index ke 2 sama dengan meelee
            melee.push(result[i][0])    // maka index 1 dimemasukan ke grup melee [ 'Meepo', 'Axe' ]
        } else if (result[i][1] === "Ranged") { // jika result index 2 Ranged 
            ranged.push(result[i][0]) // maka index 1 dimemasukan ke grup Ranged [ 'Razor', 'Invoker', 'Sniper' ]
        }
    }
    output.push(ranged);
    output.push(melee);
    return output; // [ [ 'Razor', 'Invoker', 'Sniper' ], [ 'Meepo', 'Axe' ] ]
}

// ==================================================================

// Instructor solution

function splitting(str) {
    let result = [];
    let temp = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ',' || i === str.length-1 ) {
        if(i === str.length-1 ) temp += str[i];
        result.push(temp);
        temp = '';
      } else {
        temp += str[i];
      }
    }
  
    return result;
  }
  
  function meleeRangedGrouping (str) {
    const finalResult = [];
  
    if (str && typeof str == 'string') {
      const splitted = splitting(str), result = [], ranged = [], melee = [];
      let temp = '';
    
      for (let i = 0; i < splitted.length; i++) {
        const tempHyphenSplitted = [];
  
        for (let j = 0; j < splitted[i].length; j++) {      
          if (splitted[i][j] === '-' || j === splitted[i].length-1 ) {
            if(j === splitted[i].length-1 ) temp += splitted[i][j];
            tempHyphenSplitted.push(temp);
            temp = '';
          } else {
            temp += splitted[i][j];
          }
        }
  
        result.push(tempHyphenSplitted);
      }
  
      for (let i = 0; i < result.length; i++) {
        (result[i][1] === 'Ranged') ? ranged.push(result[i][0]) : melee.push(result[i][0]);
      }
  
      finalResult.push(ranged, melee);
    }
  
    return finalResult;
  }

  // =========================================================================================


