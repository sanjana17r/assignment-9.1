class createobject//function that creates object and returns the following objects.
{
    constructor() //this is the object constructor, and creates the following objects.
    {
        this.name="sanjana";//this is the name to be returned
        this.height="5.2ft";//height to be returned
       
    }
    aboutYourself() 
    {
        console.log("I am " + this.name+", i am "+ this.height+" tall.");
    }
    
}
var me=new createobject();//a new object created with name "me".
me.aboutYourself();//executes this function.Hence prints " i am sanjana, i am 5.2ft tall".