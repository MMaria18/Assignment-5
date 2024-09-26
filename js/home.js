
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

    alert(`Thank you for donating ${donation} Taka!`);


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





