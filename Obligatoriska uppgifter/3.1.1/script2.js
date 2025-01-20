/*
JavaScript som använder och testar de globala objekten 
Number, String och RegExp
*/

/*Använder numbers för att spara ett bilobjekts pris (Audi S3 2022)*/
const priceOfAudi = 450000;
console.log("Pris: ", priceOfAudi);
document.write("Pris: ", priceOfAudi + " SEK" + "<br>");

/*Använder String för att skriva ut modellen på bilobjektet*/
const modelAudi = "Audi S3 2022";
console.log("Modell: ", modelAudi.toUpperCase() + "<br>");
document.write("Modell: ", modelAudi.toUpperCase() + "<br>");

/*Använder RegExp för att kolla om det är en S3 modell*/
const searchModel = /s3/i;
console.log("Är det en S3? ", searchModel.test(modelAudi));
document.write("Är det en S3? ", searchModel.test(modelAudi));