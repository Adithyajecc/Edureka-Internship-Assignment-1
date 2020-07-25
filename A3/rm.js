class restaurantManager{
    constructor(){
        this.restaurantlist=[
            {Name:"sweet corner",Address:"Palarivatom,Cochin",city:"Cochin"},
            {Name:"ice and cool",Address:"Hubside,Cochin",city:"Cochin"},
            {Name:"supertaste",Address:"Vytilaa,Cochin",city:"Cochin"},
            {Name:"V.k Bakes",Address:"Town center,Banglore",city:"Banglore"},
            {Name:"lovebytes",Address:"Red Rad center ",city:"Delhi"},
            {Name:"vegbites",Address:"Mysore,redcorac",city:"Mysore"},
            {Name:"Sweet delight",Address:"Palarivatom,cochin",city:"Cochin"},
            {Name:"Sweetie oves",Address:"Palarivatom,cochin",city:"Banglore"}
        ]
}
printallrestaurantnames(){
    var i;
    for(i=0;i<this.restaurantlist.length;i++){
        console.log(this.restaurantlist[i].Name+"\n"+this.restaurantlist[i].Address+"\n"+this.restaurantlist[i].city)
    }
}
filterRestaurantByCity(city){
    var i,flag=0;
    city=city.charAt(0).toUpperCase()+city.slice(1);
    console.log("Restaurants at "+city);
    for(i=0;i<this.restaurantlist.length;i++){
        if(this.restaurantlist[i].city==city){
            flag=1;
           console.log(this.restaurantlist[i].Name+"\n"+this.restaurantlist[i].Address+"\n"+this.restaurantlist[i].City);
        }
    }
    if(flag==0){
        console.log('No details of restaurants in this city');
    }
}
}
function myFunction(){
    var restaurant=new restaurantManager();
    console.log("Details of all restaurants\n");
    restaurant.printallrestaurantnames();
}
function click2()
{
    var restaurant=new restaurantManager();
    var i1=document.getElementById('input1').value;
    restaurant.filterRestaurantByCity(i1);
}

