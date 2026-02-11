//function - block iof code for reusability
/*if function writtern inside object - method
    used to describe object behaivour
    */
   //this -to get reference of the object 
   //method is used to describe object behaviour
   var person ={
      firstname:"srikanth",
      lastname:"sanjeev",
      fullname(){
          return this.firstname+" "+this.lastname;
      }
   }
   console.log(person);
   console.log(person.fullname());


   var student={
      firstname:"srikanth",
      lastname:"sanjeev",
      age:23,
      marks:[50,60,70,50,60],
      getTotalMarks(){

      }
   };
   //Assign - get stuy totalmarks,result average




   //constructor function - new operator is used ti create mutiple objects from this type

   

   function Person(firstname,lastname){
         this.firstname=firstname;
         this.lastname=lastname;
   }

   var obj1=new Person("sri","kanth");
   console.log(obj1);


   //objects inherit properties from one to annother using protypes
   //every object has its own property called protype


function Student(firstname,lastname,marks){
         this.firstname=firstname;
         this.lastname=lastname;
         this.marks=marks;
   }
   Student.prototype.gettotal=function(){
       var total=0;
       for(var i=0;i<this.marks.length;i++){
          total+=this.marks[i];
       }
       return total;
   }

   var obj1=new Student("sri","kanth",[30,40,50]);
    var obj2=new Student("sri","hari",[90,70,60]);
   console.log(obj1);
   console.log(obj2);
   console.log(obj1.gettotal());


   console.log(obj2.gettotal());


   //employee monthly slaray according to working daya
   //var emp1=new Employee("srikanth",120000,20,"Jun")
   //emp1.getmontlysalary

   //employee :name salary designation,,this.getmonthlysal


   //object.freeze()  - to lock the attributes prevents the modification of existing property attributes and values and prevents rhw addition of 
   //new properties
   //strict mode --Object.freeze()
   var obj ={
      a:1,b:2,c:3
   }
   Object.freeze(obj);
   //obj.a=10;
   delete obj.a
   console.log(obj);
   obj.d=10;
 console.log(obj);

 //object.assign()

 //copy the values of all enumerable own properties from one or more source objects to target objects
 var s ={a:1,b:2};
 var p={c:3,d:4};
 var z= Object.assign({},s,p)
 //{} -> des s,p-> source
 console.log(z);
 console.log(s);
 console.log(p);


 //Object.hasOwn() - check if object has property
 //this method checks wheter the object has specified property
 //as its own (not inherited property)


 const obj={
    name:'srikanth',
    age:'30'

 }
console.log(obj.hasOwn('name'));
console.log(obj.hasOwn('address'));
   
