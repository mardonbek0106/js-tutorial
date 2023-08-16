// let student = 950;

// if (student>=90){
//     console.log("A");
// }
// else if(student <90 && student>=80){
//     console.log("B");
// }
// else if(student<80 && student >= 70){
//     console.log("C");
// }
// else{
//     console.log("F");
// }
// =============== if ilse ni ishlatilishi.

// console.log(false == 0);
// console.log(true == 1);
// console.log(false == null);
// console.log(false == undefined);
// console.log(undefined == null);
// console.log("salom" == "salom");

// ============== true , false chiqishi.

// let a = 11;
// console.log(a++);
// console.log(a);
// bu holatda javob(12)chiqadi. {huddi shu joyda a-- qilsak 1 ga kamaytiradi}

// let a = 11;
// console.log(++a);
// bunda ham javob (12)chiqadi. {huddi shu joyda a-- qilsak 1 ga kamaytiradi}


// {obrivations}
// let a = 40;
// a = a + 10;
// a*=2;
// console.log(a);
// 1 yol uzunroq 2 yoldan foydalangan yahshiroq
// 2 yol = ni oldidagi belgiga qarab amal bajariladi

// 1{comparision solishitirish}
// let a = 10;
// let b = 14;
// let c = 14;
// console.log(a < b);
// console.log(b <= c);
// console.log(b == c);
// console.log(b === c);   {buyerda faqat true ga misol keltirilgan}

// 2{comparision solishitirish}
// let a = 20;
// let b = 24;
// let c = "24"
// console.log(a > b);
// console.log(a >= c);
// console.log(b > c);
// console.log(b === c);  { bu yerda false ga misol}


// [// let str1 = "A";
// let str2 = "a";
// console.log(str1 < str2 ); 
// {bu misolda true chiqadi chunki kichk hariflrni qiymati katta harifnikidan daoim katta boladi}]


// let ceo = false;
// let admin = true;
// console.log(admin === true || ceo === true);
// {bu orga misol}



//  let id = false;
//  let face = true;
//  console.log(id && face); 
// {bu (AND) yani (&&) bu belgi bir nechta sharlar bolib unin ichidagi  atiga bitta shart notogri bolsa bu false boladi}


// let men = true;
// let sen = true;
// console.log(!men);
// {bu (!) belgi biror bir sozni oldida kelsa usha sizni teskarisiga aylantirib qoyadi}

// let ai = "seshamba"
// if(ai === "dushamba")
// console.log("faqat JS darsini qilaman");
// else if(ai === "seshamba"){
//     console.log("ingiliz tilin urganam");
// }
// else if (ai === "payshamba"){
//     console.log("yapon tili urganaman");
// }else{
//     console.log("bugun trenerofka kuni");
// }
// {bu yerda else if ga misol keltirilgan}


// let bal = 37;
// if(bal >= 90){
//     console.log("grang");
// }else if(bal < 90 & bal > 80){
//     console.log("kantrakt");
// }else if(bal < 80 & bal > 60){
//     console.log("supper kontrakt");
// }else{
//     console.log("shippai");
// }
// {bu if else ga kridet modul misloli}


// ternary operator -- if else ni bir qatorga yozgan paytda ishlatiladi bunda faqat birmasrta ish bajaradi

// let temp = 0;
// temp > -1? console.log("havo juda sovuq") : console.log("havo issiq");
// shu korinishda ham yozsa boladi {if (? shu belgi bilan ishlatiladi) else (: shu belgi bilan ishlatiladi)}


// NULLISH (?? shu belgi nullish bolib) -- OR bilan bir hil buni farqi nullish null bilan undefined ni tekshiradi


// darajaga oshirish misol:(2 ** 10) shu korinishda 2 ni 10 marta kopaytirish mumkun!

// {
// switch bu if else ga uhshab ketadi farqi 
// switch (=== faqat uchta tenglika teng)
// if (<=, ==, >=, <>, ===,shunga uhshash belgilarni hammasini qabul qiladi)


// let data = "quyoshli";
// switch(data){
//     case 'yomgir':console.log("bugun havo yomgirli"); break
//     case "bulutli":console.log("havo dim");
// case "qorli":console.log("bugun havo juda sovuq");
// default: console.log("malumot hato");
// }
// quydagi Code ishlab togri malimotni topgandan keyin ham pasga qarab kodlarni uqib ketaveradi buni tohtatish ni yoli (break)dir tormiz degan manoda keladi
// continue degani break ni teskarishi tohtamasdan ishlab ketadi}



// 4 DARS (FOR LOOP DARSI)
// for loop zinaga chiqishga uhshaydi
//  (1 misol)
// for (i = 1; i <= 10; i = i + 1){
//     console.log("salom jdu");
// } 
// bu code da javob quydagicha chiqadi
// salom jdu
// salom jdu (shu ketma ketligda 10 salom jsu degan javob chiqadi)

// (2 misol)
 
// bu yerda pulni 10 ta 10 qilib tahlab qoyishni misol qilsak boladi  
// for (i = 10; i >= 1; i--){
//     console.log(i);
// }
// bu codeda 10 talik zinadan pastka qarab bittadan tushib kelyabdi

// (3 misol)
// var i = 10;
// for (i = 10; i >= 1; i--) {
//     for (j = 1; j <= 10; j++) {
//         console.log(j);
//     }
//     console.log(i);
// }
// bu codeda 1 dan 10 gacha 10 marta chiqaradi.



// 5 DARS  While do While FUNCTION 

// let i = 5;
// while(i){
//     console.log(i--);
// }
// bu code bitt qiymatni yozib -- qoysak usha qiymatdan pastga qarab sanab tushib keladi,agar ++ belgi qoysak cheksiz sanab ketaveradi(yuqoridagi code da 5 dan pasga q gacha sanab tushadi)

// // do while yozi usuli va ishlatish qoidalri
// let i = 4;
// do{
//     console.log(i);
//     i--;
// }while(i === 10);
// do while ham while bilan bir hil ish bajaradi faqat yozilishida farq bor

// function haqida malumotlar
// 1 call any (kol enitayim) - bu kodni vazifasi qayera kerak bolsa usha yerda chaqiramiz

// 2 dyunamic (daynem) - bir name le nomlarni har hil usulga solib ishlatishimiz mumkun boladi

// biz qayerda uzgaruvchidan keyin manabundai qavus korsak bu function boladi()

function getAvr (){
    console.log("jdu student");
    console.log("tatu student");
    console.log("tdtu student");
    console.log("just student");
    console.log("cica student");
    console.log("webbrain student");
    console.log("===========");
}
// getAvr();
// bu codeda function ni qayrda va necha marta chaqirsak ham ishlayverdi necha marta