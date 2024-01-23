
//[id , brand , model , type , pricePerDay, available]
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];

// 1) print all car brands
console.log("1) print all car brands : ");
carBooking.forEach(car => {
    console.log(car[1]);
});

// 2) print total number of cars available
console.log('-------------------------------');
console.log("2)  print total number of cars available ");
total = carBooking.map(c=>c[5]).reduce((car1,car2)=>car1 + car2)
console.log(total);


// 3) print sedan car details
console.log("----------------------------------");
console.log("3) print sedan car details");
c = carBooking.find(car=>car[3]=='Sedan')
console.log(c);

// 4) print cars with price per day greater than 60
console.log("----------------------------------");
console.log("4) print cars with price per day greater than 60");
carBooking.filter(pr=>pr[4]>60).forEach(car=>console.log(car[1]))

// 5) print details of 'jeep wrangler'
console.log("----------------------------------");
console.log("5) print details of 'jeep wrangler'");
j = carBooking.find(car=>car[2]=='Wrangler')
console.log(j);


// 6) sort cars based on the dscending order of the price per day
console.log("----------------------------------");
console.log("6) sort cars based on the dscending order of the price per day");
carBooking.sort((car1,car2)=>car2[4]-car1[4]).forEach(car=>console.log(car[1]))


// 7) sort cars based on ascending order of available cars
console.log("----------------------------------");
console.log("7) sort cars based on ascending order of available cars");
carBooking.sort((car1,car2)=>car1[5]-car2[5]).forEach(car=>console.log(car[1]))


// 8) find the car with the most available cars
console.log("----------------------------------------------");
console.log("8) find the car with the most available cars");
console.log(carBooking.reduce((car1,car2)=>car2>car1[5]>car2[5]?car1[1]:car2[1]));


// 9) calculate the revenue if all the cars are rented for a day
console.log("---------------------------------------------");
console.log("9) calculate the revenue if all the cars are rented for a day");
revenue = carBooking.map(c=>c[4]).reduce((car1,car2)=>car1 + car2)
console.log(revenue);



// 10) count the number of sedan cars
console.log("-----------------------------------------------------");
console.log("10) count the number of sedan cars");
total = carBooking.map(sc=>'Sedan').reduce((c1,c2)=>c1+c2)
console.log(total);



// 11) print all unique car brands
console.log("--------------------------------------------------");
console.log("11) print all unique car brands");
carBooking.forEach(car => {
    console.log(car[1]);
});


// 12) find the total number of available cars for all types
console.log("--------------------------------------------");
console.log("12) find the total number of available cars for all types");
total = carBooking.map(c=>c[5]).reduce((car1,car2)=>car1 + car2)
console.log(total);


// 13) find the cars with the least availability
console.log("-----------------------------------------------");
console.log("13) find the cars with the least availability");
la = carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(la[1]);



// 14) check if there is any car with a prize per day exactly 55
console.log("-------------------------------------------------");
console.log("14) check if there is any car with a prize per day exactly 55");
pd = carBooking.some(car=>car[4]==55)
console.log(pd?'Yes':'No');
