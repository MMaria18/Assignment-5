
let donationHis = [];
// to get current date and time

function dateTime (){
    const t = new Date();
    return t.toLocaleString('es-Us', {timeZone: 'Asia/Dhaka'}) + "(Bangladesh standard time)";

}



// for noakhali

document.getElementById('btn-noakhali').addEventListener('click',function(event){

    event.preventDefault();


    const donation = parseFloat(document.getElementById('input-noakhali').value);
    

   if(donation=== 'number' || donation>=0){
    const preAmount = parseFloat(document.getElementById('balance-noakhali').innerText);
   
    const totalDonate = donation + preAmount;

    document.getElementById('balance-noakhali').innerText = totalDonate;

    const balance=parseFloat(document.getElementById('totalBalance').innerText);
    
    const finalBalance = balance-donation;

    document.getElementById('totalBalance').innerText =finalBalance;

    const Date = dateTime();
    const cause = "Flood Relief in Noakhali, Bangladesh";
    donationHis.push({
        amount: donation,

        reason: cause,
        date : Date

    });

   

    // card
    const newCard = document.createElement("div");
    newCard.className = 'bg-white px-10 py-10 mx-20 justify-center rounded-xl border-2 border-gray-200';
    newCard.style.position = 'absolute'; 
    newCard.style.top = '270px'; 
    newCard.style.right = '280px'; 
    

    // Set card content
    newCard.innerHTML = `

    <div class=" flex-col justify-center px-20 text-center">

        <h3 class="font-bold py-4 text-3xl">Congrats!</h3>
         <div class="flex items-center justify-center   ">
         <img
                src="assets/coin.png"  />
         </div>
        
        <p class="text-gray-500 py-4 text-lg">You have Donated for Humankind</p>
        <p class="font-bold pb-4 text-xl ">Successfully</p>
         <button class="close-card btn p-3">Close Confirmation</button>
         </div>
    `;


    const cards = document.getElementById('cards'); 
    cards.classList.remove('hidden');
    
    cards.appendChild(newCard);

    newCard.querySelector('.close-card').addEventListener('click', function() { 
        newCard.remove();



   })

   }

   else{
    alert('Invalid Donation amount')
   }

})

// for feni 

document.getElementById('btn-feni').addEventListener('click',function(event){

    event.preventDefault();

    const donation = parseFloat(document.getElementById('input-feni').value);
    
    if(donation=== 'number' || donation>=0){
    const preAmount = parseFloat(document.getElementById('balance-feni').innerText);
   
    const totalDonate = donation + preAmount;

    document.getElementById('balance-feni').innerText = totalDonate;

    const balance=parseFloat(document.getElementById('totalBalance').innerText);
    
    const finalBalance = balance-donation;

    document.getElementById('totalBalance').innerText =finalBalance;

    const Date = dateTime();
    const cause = "Flood Relief in Feni, Bangladesh";
    donationHis.push({
        amount: donation,

        reason: cause,
        date : Date

    });

    alert(`Thank you for donating ${donation} Taka!`);

    }

    else{
        alert('Invalid Donation amount')
       }


})


// protest 

document.getElementById('btn-protest').addEventListener('click',function(event){

    event.preventDefault();

    const donation = parseFloat(document.getElementById('input-protest').value);
    
    if(donation=== 'number' || donation>=0){
    const preAmount = parseFloat(document.getElementById('balance-protest').innerText);
   
    const totalDonate = donation + preAmount;

    document.getElementById('balance-protest').innerText = totalDonate;

    const balance=parseFloat(document.getElementById('totalBalance').innerText);
    
    const finalBalance = balance-donation;

    document.getElementById('totalBalance').innerText =finalBalance;

    const Date = dateTime();
    const cause = " the Quota Movement, Bangladesh";
    donationHis.push({
        amount: donation,

        reason: cause,
        date : Date

    });
    alert(`Thank you for donating ${donation} Taka!`);

    }

    else{
        alert('Invalid Donation amount')
       }


})


// history tab
     


    const donate = document.getElementById('btn-donate');
     const history = document.getElementById('btn-his');
     history.addEventListener('click',function(){


        history.classList.add(
           
           "px-7",
           "font-bold" ,
          
           "bg-gradient-to-r",
           "from-pink-400",
            "to-red-300"

        );

        history.classList.remove(
            "border-2"
        )

        donate.classList.remove(

          
           "font-bold" ,
          
           "bg-gradient-to-r",
           "from-pink-400",
            "to-red-300"

        )

        document.getElementById('cards').classList.add('hidden');


        const historyContainer =document.getElementById('his-list');

        // loop for each donatio
        for(const money of donationHis){
            const historyList = document.createElement("div");
        historyList.className =
        "bg-white px-5 py-4 rounded-md my-6 mx-24 border-2 border-gray-200"

        historyList.innerHTML =`
        <h3 class="font-bold">${money.amount} Taka is Donated for ${money.reason}</h3>
        <p class="text-gray-500 bg-slate-100 text-sm">Date : ${money.date}</p>
        
        
        `;
    
        historyContainer.appendChild(historyList);
    }

    
});


   const btnDonate = document.getElementById('btn-donate')
   btnDonate.addEventListener('click',function(){

    btnDonate.classList.add(

        "px-7",
           "font-bold" ,
          
           "bg-gradient-to-r",
           "from-pink-400",
            "to-red-300"


    )


    history.classList.remove(

       
       
        "bg-gradient-to-r",
        "from-pink-400",
         "to-red-300"

       
    )

    document.getElementById('cards').classList.remove('hidden');






})





