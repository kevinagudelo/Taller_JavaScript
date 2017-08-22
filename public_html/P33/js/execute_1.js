    class vitae {
      constructor (){
        this.personal ={};
        this.family = {};
        this.work = {};
        this.profile= {};
      }


     menu (){
        var selection = Number(prompt( "1. Personal information \n\
        2. Family Reference\n\
        3. Work reference\n\
        4. Professional profile description\n\
        5. Print resume\n\
        0. Exit the program"));
        return selection; 
        }    
     personalref () {
      console.clear();
      alert("Personal information");
      let name=prompt( "Write Full name ");
      let birthdate=prompt( "Write Birthdate  D/M/Y ");
      let phone=prompt( "Phone");
      let city=prompt( "City of residence ");
      this.personal = {
        name,
        birthdate,
        phone,
        city
      };
      return this.personal ;
         }
     familyref (){
      console.clear();
      alert(" Section Of Family References");
      let namef=prompt("Write Full name ");
      let relationship=prompt( "Write Relationship ");
      let   phonef=prompt("Write Phone ");
      this.family = {
        namef,
        relationship,
        phonef
      };
      return this.family;
                 }

    workref () { 
      console.clear();
      alert( " Section Of Work References ");
      let nemew=prompt( "Write Full name ");
      let company= prompt( "Write Name of Company ");
      let work=prompt( "Write Work you did ");
      let phonew=prompt("Write Phone ");
      this.work = {
        nemew,
        company,
        work,
        phonew
      };
      return this.work;
      }
     ocupational () { 
      alert(" Section Occupational profile ");
      ocupation=prompt(" Type your occupational profile briefly (maximum 600 characters)");
      this.profile = {
        ocupation
      };
      return this.profile;
      }
     print () { 
      console.clear();
      console.log( " -------------------------------------------------Curriculum vitae -------------------------------------------------");
      console.log( " -------------------------------------------------Personal Information  ------------------------------------------------ ");
      console.log("Name  : "+this.personal.name);
      console.log("Birthdate  : "+this.personal.birthdate);
      console.log("Phone :  " + this.personal.phone);
      console.log("City   :  "+ this.personal.city);
      console.log( " -------------------------------------------------Family Reference -------------------------------------------------");
      console.log(" Name  :  "+this.family.namef);
     console.log(" Relationship   :  "+this.family.relationship);
      console.log(" Phone   :    " + this.family.phonef);
      console.log(" -------------------------------------------------Work Reference -------------------------------------------------");
      console.log("Name   :  "+ this.work.nemew);
      console.log("Name of company   :  "+this.work.company);
      console.log("Work you did  :   "+this.work.work);
      console.log("Phone :   " + this.work.phonew);
     console.log(" -------------------------------------------------Occupational profile -------------------------------------------------");
      console.log("Professional Profile  :  " +this.profile.ocupation);
     }


    validate (){
      let option = this.menu ();
      switch (option){
        case 1:
          this.personalref();
          this.validate ();
          break;
        case 2:
          this.familyref ();
          this.validate ();
          break;
        case 3 :
          this.workref ();
          this.validate ();
          break
        case 4:
          this.ocupational ();
          this.validate ();
          break;
        case 5 :
         this.print ();
         this.validate ();
         break;

        case 0: 
        alert ("bye");
        break;
      default:this.validate ();

      }
    }
    }
    let exe  = new vitae ();
    exe.validate();