

config = {
	
    };
var con;    
config =con ;

var inf = [
  info = {
	 
    }

 ];

function delete1 (){

	var valuer = prompt( "Employee ID number to be deleted");
	c=0;
	for (i=0 ; inf.length ; i++){
      if (valuer=inf.id ){
			console.log( "****Information****");
			console.log( "Name to be employee  "+ inf.name);
            console.log( "surname to be employee " +inf.surname);
			console.log( "Current job title  "+ inf.carg);
			console.log ("Employee salary " + inf.salary);
            console.log( "Employee ID " +inf.id);
			console.log("*********Delete******");
			read = prompt( " \n\
            Are you sure you want to delete this employee?.\n\
            Press 's' or 'S' to confirm  ");
			if ((read === 's') || (read === 'S')) {
				delete inf.name
				delete inf.surname
				delete inf.id
				delete inf.carg
				delete inf.salary
				alert( " Employee removed ");
              }else
				alert( " No changes were made "	);
				
			c=(c+1);
          }
        }    
	
    if (c===0) {
		console.log( "Employee not found");
      }
	validate();
function delete (){

	var valuer = prompt( "Numero de cedula del empleado a eliminar");
	c=0;
	for (i=0 ; inf.length ; i++){
      if (valuer=inf.id ){
			console.log( "****Informacion****");
			console.log( "Nombre  de el empleado  "+ inf.name);
            console.log( "apellido de el empleado " +inf.surname);
			console.log( "Cargo  "+ inf.carg);
			console.log ("salario" + inf.salary);
            console.log( "Empleado ID " +inf.id);
			console.log("*********Eliminar******");
			read = prompt( " \n\
            Seguro de querer borar este empleado ?..\n\
            Presione 's' or 'S' para confirmar  ");
			if ((read === 's') || (read === 'S')) {
				delete inf.name
				delete inf.surname
				delete inf.id
				delete inf.carg
				delete inf.salary
				alert( " Empleado eliminado ");
              }else
				alert( " No se realizaron cambios "	);
				
			c=(c+1);
          }
        }    
	
    if (c===0) {
		console.log( "Empleado no encontrado");
      }
	validate();

funcion id1  (var arreglo [1000] de info inf ) :entero
inicio
	  repita
		escriba " Write id		"
		lea ced
		llamar nueva_linea
		repit<-falso
		llamar limpiar_pantalla
		si i>=1 entonces
			para c<-0 hasta i-1 haga
				si inf[c].id=ced entonces
					repit<- verdadero
					llamar nueva_linea
					escriba "+++++++++++++++++++++++        Id already registered           +++++++++++++++++++++++++++ 	"
					llamar nueva_linea 
					llamar nueva_linea
				fin si
			fin para	
		fin si
									
	hasta  repit=falso
	 inf[i].id<-ced
	 llamar nueva_linea
	 retorne inf[i].id
							
	fin
funcion id (var arreglo [1000] de info inf ) :entero
	inicio
	  repita
		escriba " Escriba Cedula		"
		lea ced
		llamar nueva_linea
		repit<-falso
		llamar limpiar_pantalla
		si i>=1 entonces
			para c<-0 hasta i-1 haga
				si inf[c].id=ced entonces
					repit<- verdadero
					llamar nueva_linea
					escriba "+++++++++++++++++++++++        Cedula ya Registrada           +++++++++++++++++++++++++++ 	"
					llamar nueva_linea 
					llamar nueva_linea
				fin si
			fin para	
		fin si
									
	hasta  repit=falso
	 inf[i].id<-ced
	 llamar nueva_linea
	 retorne inf[i].id
							
	fin
	funcion inform1 (var arreglo [1000] de info inf, var config con ) :entero
	inicio
		repita
			escriba "Name of the employee"
			llamar nueva_linea
		    lea inf[i].name
			llamar nueva_linea
			escriba "Surname of the employee"
			llamar nueva_linea
			lea inf[i].surname
			llamar nueva_linea
			escriba "Position of the employee"
			llamar nueva_linea
			lea inf[i].carg
			llamar nueva_linea
		    llamar salary ( inf, con)
			escriba " Write id		"
			lea ced
			llamar nueva_linea
			repit<-falso
			llamar limpiar_pantalla
			si i>=1 entonces
				para c<-0 hasta i-1 haga
					si inf[c].id=ced entonces
						repit<- verdadero
						llamar nueva_linea
						escriba "+++++++++++++++++++++++        Id alredy Registered        +++++++++++++++++++++++++++ 	"
						llamar nueva_linea 
						llamar nueva_linea
					fin si
				fin para	
			fin si
																
		hasta repit = falso
		inf[i].id<-ced
		retorne inf[i].id
	fin		
funcion inform (var arreglo [1000] de info inf, var config con ) :entero
	inicio
		repita
			escriba "Nombre del empleado"
			llamar nueva_linea
		    lea inf[i].name
			llamar nueva_linea
			escriba "Apellido del empleado"
			llamar nueva_linea
			lea inf[i].surname
			llamar nueva_linea
			escriba "cargo del empleado"
			llamar nueva_linea
			lea inf[i].carg
			llamar nueva_linea
		    llamar salary ( inf, con)
			escriba " Escriba Cedula		"
			lea ced
			llamar nueva_linea
			repit<-falso
			llamar limpiar_pantalla
			si i>=1 entonces
				para c<-0 hasta i-1 haga
					si inf[c].id=ced entonces
						repit<- verdadero
						llamar nueva_linea
						escriba "+++++++++++++++++++++++        Cedula ya Registrada           +++++++++++++++++++++++++++ 	"
						llamar nueva_linea 
						llamar nueva_linea
					fin si
				fin para	
			fin si
																
		hasta repit = falso
		inf[i].id<-ced
		retorne inf[i].id
	fin		
								   
	
funcion menu : entero	
	inicio
		escriba "1. Nombre de la empresa"
		llamar nueva_linea
		escriba "2. Salario minimo"
		llamar nueva_linea
		escriba "3. Apartir de cuantos salario minimos se cobra retencion en la fuente ?."
		llamar nueva_linea
		escriba "4.Porcentaje de retencion en la fuente"
		llamar nueva_linea
		escriba "5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte"
		llamar nueva_linea
		escriba "6. Cuanto es el auxilio de transporte "
		llamar nueva_linea
		escriba "7. Cantidad de horas laborables  en el mes"	
		llamar nueva_linea 
		escriba "0. Salir del programa"
		llamar nueva_linea
		escriba "Seleccione una opcion__ "
	
     fin 
funcion menu0 : entero	
	inicio
		escriba "1. company name"
		llamar nueva_linea
		escriba "2. Minimum salary"
		llamar nueva_linea
		escriba "3. How many minimum salaries do you charge retention at the source?."
		llamar nueva_linea
		escriba "4.Percentage withholding at source"
		llamar nueva_linea
		escriba "5. Up to how many minimum wages are needed to pay for transport aid"
		llamar nueva_linea
		escriba "6. How much is the transport aid?e "
		llamar nueva_linea
		escriba "7. Number of working hours in the month"	
		llamar nueva_linea 
		escriba "0. Exit the program"
		llamar nueva_linea
		escriba "Select an option__ "
	
     fin      
funcion salary (var arreglo [1000] de info inf, var config con ) :real
	
	inicio
		escriba "Salario del empleado"
		llamar nueva_linea
		lea salary
		mientras salary < con.sm haga
		escriba " Ingrese un salario valido "
		llamar nueva_linea
		lea salary
		fin mientras
		inf[i].salary <- salary
		llamar nueva_linea
		escriba " El salario del empleado es " ,inf[i].salary
		llamar nueva_linea
		retorne inf[i].salary	
	fin
funcion salary1 (var arreglo [1000] de info inf, var config con ) :real
	
	inicio
		escriba "Employee salary"
		llamar nueva_linea
		lea salary
		mientras salary < con.sm haga
		escriba " Enter a valid salary "
		llamar nueva_linea
		lea salary
		fin mientras
		inf[i].salary <- salary
		llamar nueva_linea
		escriba " The employee's salary is" ,inf[i].salary
		llamar nueva_linea
		retorne inf[i].salary	
	fin	
funcion menu11 : entero	
	inicio
		escriba "1. Select language"
		llamar nueva_linea
		escriba "2. Set up"
		llamar nueva_linea
		escriba "3. Continue"
		llamar nueva_linea
		escriba "0. Exit the program"
		llamar nueva_linea
		escriba "Quit the programSelect an option__ "
	
     fin  	
funcion menu1 : entero	
	inicio
		escriba "1. Selecciona un idioma"
		llamar nueva_linea
		escriba "2. Configurar"
		llamar nueva_linea
		escriba "3. Continuar"
		llamar nueva_linea
		escriba "0. Salir del programa"
		llamar nueva_linea
		escriba "Seleccione una opcion__ "
	
     fin  

funcion buble (var arreglo [1000] de info inf, var config con, var arreglo [1] de info temp ) :real
entero aux
cadena[30] auxo
inicio
mientras repit = falso haga
	repit<- verdadero
	para i<-1 hasta 1000 haga
		si inf[i].id > inf[i + 1].id entonces
			temp[1]<-inf[i]
			
			inf[i]<- inf[i+1]
			inf[i+1] <- temp[1]
			repit<- falso
		fin si	
	fin para
	
fin mientras

	  mientras (inf[i].id <> 0) o (inf[i].carg <> "") o (inf[i].base <> 0) haga
	
	    escriba  "-----------------------------------------------------------------------------------------------------"
	    llamar nueva_linea
		escriba "|  ",inf[i].id ,"         |       ", inf[i].carg ,"            |              ", inf[i].base , "                 | "
		llamar nueva_linea
		escriba  "------------------------------------------------------------------------------------------------------"
		llamar nueva_linea
		abrir "empleados-copia.txt" como archemple para escritura
		escribir archemple, inf[i].id
		escribir archemple,inf[i].carg
		escribir archemple, inf[i].base


		
		i <- i + 1
		cerrar archemple
	fin mientras


	retorne inf[i].id
fin	
funcion menu21 : entero	
	inicio
		escriba "1. Employee management"
		llamar nueva_linea
		escriba "2. Record hours worked"
		llamar nueva_linea
		escriba "3. Generate payroll"
		llamar nueva_linea
		escriba "4. Print proof of payment"
		llamar nueva_linea
		escriba "0. Exit the program"
		llamar nueva_linea
		escriba "Select an option__ "
	
     fin  
funcion menu2 : entero	
	inicio
		escriba "1. Gestion de empleados"
		llamar nueva_linea
		escriba "2. registrar horas laboradas"
		llamar nueva_linea
		escriba "3. Generar nomina"
		llamar nueva_linea
		escriba "4. Imprimir comprobante de pago"
		llamar nueva_linea
		escriba "0. Salir del programa"
		llamar nueva_linea
		escriba "Seleccione una opcion__ "
	
     fin   
funcion menu31 : entero	
	inicio
		escriba " ***************** Employee management  ************* "
		llamar nueva_linea
		escriba "1. Add"
		llamar nueva_linea
		escriba "2. Modify"
		llamar nueva_linea
		escriba "3. Delete"
		llamar nueva_linea
		escriba "0. Retorn"
		llamar nueva_linea
		escriba "Select an option__ "
	
     fin        
funcion menu3 : entero	
	inicio
		escriba " ***************** GESTION DE EMPLEADOS  ************* "
		llamar nueva_linea
		escriba "1. Agregar"
		llamar nueva_linea
		escriba "2. Modificar"
		llamar nueva_linea
		escriba "3. Eliminar"
		llamar nueva_linea
		escriba "0. Volver"
		llamar nueva_linea
		escriba "Seleccione una opcion__ "
	
     fin           
  
inicio
	pit<-3123432
	repita
	llamar limpiar_pantalla
	llamar menu1
	lea selec
	si selec = 1 entonces
		repita
		llamar limpiar_pantalla
		escriba "1. Para cambiar a idioma ingles" 
		llamar nueva_linea 
		escriba "0. Para Salir "
		llamar nueva_linea
		escriba "Seleccione un opcion__"
		lea selec9
		si selec9 = 1 entonces
			repita 
				llamar limpiar_pantalla 
				llamar menu11
				lea selec
					si selec = 3 entonces 
		repita	
			llamar limpiar_pantalla
			llamar menu21
			lea selec3
			si selec3 = 4 entonces 
			repita
				llamar limpiar_pantalla
					escriba "Type Employee ID number to update"
					llamar nueva_linea
					lea value
					p<-0
					para i<- 1 hasta 1000 haga
						si value=inf[i].id entonces
							escriba "**********---Fare---*******************+"
							llamar nueva_linea
							escriba " *************Company " ,ne, "**********"
							llamar nueva_linea
							escriba "--------------------------------------------------------------------------------------------------------"
							escriba "|       Name of the employee   ", inf[i].name, "         |    Surname of the employee    " ,inf[i].surname,"   |"
							llamar nueva_linea 
							escriba "--------------------------------------------------------------------------------------------------------"
							llamar nueva_linea
							escriba "|        Position of the employee  ", inf[i].carg,"   |    Id of the employee    " ,inf[i].id, "   |"
							llamar nueva_linea
							escriba "--------------------------------------------------------------------------------------------------------"
							llamar nueva_linea
							escriba "|                                        Total to be charged  " ,inf[i].base, "                                   |"
						    llamar nueva_linea 
							
						fin si
					fin para
					
					si p=0 entonces 
						escriba "Employee not found"
					fin si	
					llamar nueva_linea
					Escriba " Press number 0 to exit___ "
					lea selec8
					hasta selec8= 0
					
					
			fin si
			
			
			si selec3= 3 entonces
			repita
			llamar limpiar_pantalla
			llamar buble(inf, con, temp)
			llamar nueva_linea
			escriba "Press number 0 to exit __"
			lea selec6
		    hasta selec6 = 0
			
			
			fin si
			si selec3 = 2 entonces
				repita
					
				
				escriba "Enter ID number to record hours"
					llamar nueva_linea
					lea valu
					p<-0
					para i<- 1 hasta 1000 haga
						si valu=inf[i].id entonces
							repita 
							escriba " Daytime hours worked"
							llamar nueva_linea 
							lea hd
							llamar nueva_linea
							escriba " Night hours worked"
							llamar nueva_linea
							lea hn 
							llamar nueva_linea
							escriba " Daytime Sunday hours "
							llamar nueva_linea
							lea hdd
							llamar nueva_linea
							escriba " Sunday Night Hours"
							llamar nueva_linea
							lea hdn
							llamar nueva_linea
							escriba " Daytime overtime "
							llamar nueva_linea
							lea hed
							llamar nueva_linea
							escriba " Nighttime overtime "
							llamar nueva_linea
							lea hen
							llamar nueva_linea
							escriba " Extraordinary daylight hours "
							llamar nueva_linea
							lea hded
							llamar nueva_linea
							escriba "Extra Sunday Night Time  "
							llamar nueva_linea
							lea hden
							llamar nueva_linea 
							p<-p+1
							sum<-hd+hn+hdd+hdn+hed+hen+hded+hden
							si sum > con.ht entonces
								escriba "You have failed to exceed the number of working hours. RETURN TO TRY IT "
								llamar nueva_linea
							fin si
							day<-(con.sm / 31)/8
							inf[i].base<- (hd*day)+((hn*day)+(hn*(day*0.35)))+((hdd*day)+(hdd*(day*0.75)))+((hdn*day)+(hdn*(day*1.1)))+((hed*day)+(hed*(day*0.25)))+((hen*day)+(hen*(day*0.75)))+((hded*day)+(hded*(day*2)))+((hden*day)+(hden*(day*1.5)))
							si inf[i].base <= con.smt*con.sm entonces
								inf[i].base<-inf[i].base + con.at
							fin si	
							si inf[i].base > con.cs*con.sm entonces
							inf[i].base<-(inf[i].base)-((inf[i].base) *((con.prf)/(100))) 
							fin si
								
							
							hasta sum<= con.ht
								
						fin si
					fin para
					si p=0 entonces 
					escriba "Employee no found"
					fin si
					llamar nueva_linea	
						escriba " Press number 0 to exit___ "
				    	lea selec5
					
					
				
				hasta selec5 = 0
				
			fin si
			si selec3 = 1 entonces
				repita	
					llamar limpiar_pantalla
					llamar menu31
					lea selec4
					si selec4 = 1 entonces
						llamar limpiar_pantalla
							escriba " Amount to add employees		"
						    lea n
							para i<-1 hasta n haga
								llamar inform (inf, con)
						Fin para
						 	
					fin si
					si selec4=2 entonces
					escriba "Type Employee ID number to update"
					llamar nueva_linea
					lea value
					p<-0
					para i<- 1 hasta 1000 haga
						si value=inf[i].id entonces
							escriba "***---Information---***"
							llamar nueva_linea
							escriba "Name of employee  ", inf[i].name
							llamar nueva_linea
							escriba "Surname of the employee " ,inf[i].surname
							llamar nueva_linea 
							escriba "Position of the employe  ", inf[i].carg
							llamar nueva_linea
							escriba "Salary of the employee  " ,inf[i].salary
							llamar nueva_linea
							escriba "Id of the employe " ,inf[i].id
							llamar nueva_linea 
							escriba "---Update---"
							llamar nueva_linea
							escriba "***---Information---***"
							llamar nueva_linea
							llamar inform1 (inf, con)
						fin si
					fin para
					
					si c=0 entonces 
						escriba "Contact not found"
					fin si	
					lea retorn
					si retorn <> pit entonces
					llamar menu31
					fin si
					fin si
					si selec4= 3 entonces
						llamar delete (inf)
					fin si
				hasta selec4 = 0
			fin si
		hasta selec3 = 0			
	fin si	
	si selec = 2 entonces
		repita
		llamar limpiar_pantalla
		llamar menu0	
		lea selec1		
	si selec1=1 entonces
		
		llamar limpiar_pantalla
		escriba "**********Name of company***"
		llamar nueva_linea
		lea con.ne
		llamar nueva_linea
		escriba "Company ",con.ne
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
        sino si retorn<>pit entonces
        	llamar limpiar_pantalla
		fin si
	fin si	 
	si selec1=2 entonces
	llamar limpiar_pantalla
		escriba "**********Minimum salary***"
		llamar nueva_linea
		lea con.sm
		llamar nueva_linea
		escriba "Current Minimum Wage  ",con.sm
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
		si retorn <> pit entonces
		llamar menu0
		fin si
	fin si
	si selec1=3 entonces
	llamar limpiar_pantalla
		escriba "********** How many minimum salaries do you charge retention at the source?.***"
		llamar nueva_linea
		escriba "**********Enter the number of wages***"
		llamar nueva_linea
		lea con.cs
		llamar nueva_linea
		escriba "Number of wages  ",con.cs
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
		si retorn <> pit entonces
		llamar menu0
		fin si
	fin si
	si selec1=4 entonces
	llamar limpiar_pantalla
		escriba "********** Percentage of retention at the source?.***"
		llamar nueva_linea
		escriba "**********Enter the percentage ***"
		llamar nueva_linea
		lea con.prf
		llamar nueva_linea
		escriba " The percentage of retention at the source is  ",con.prf, "%"
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
		si retorn <> pit entonces
		llamar menu0
		fin si
	fin si
	si selec1=5 entonces
	llamar limpiar_pantalla
		escriba "**********Up to how many minimum salaries are needed to pay for transport aid.***"
		llamar nueva_linea
		escriba "**********Enter the number of wages ***"
		llamar nueva_linea
		lea con.smt
		llamar nueva_linea
		escriba " The number of wages is ",con.smt
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
		si retorn <> pit entonces
		llamar menu0
		fin si
	fin si
	si selec1=6 entonces
	llamar limpiar_pantalla
		escriba "**********How much is the transport aid***"
		llamar nueva_linea
		escriba "**********Enter the value ***"
		llamar nueva_linea
		lea con.at
		llamar nueva_linea
		escriba " The value of the transport aid is ",con.at
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
		si retorn <> pit entonces
		llamar menu0
		fin si
	fin si
	si selec1=7 entonces
	llamar limpiar_pantalla
		escriba "**********Number of working hours in the month***"
		llamar nueva_linea
		escriba "**********Enter the number of hours ***"
		llamar nueva_linea
		lea con.ht
		llamar nueva_linea
		escriba " The number of working hours is",con.ht
		llamar nueva_linea
		escriba "Press any key to return"
		lea retorn
		si retorn <> pit entonces
		llamar menu0
		fin si
	fin si
	hasta selec1 = 0
	fin si		
hasta selec = 0	
		
	
			
				
		fin si
		
	
	
	hasta selec9 = 0	
	fin si 
	si selec = 3 entonces 
		repita	
			llamar limpiar_pantalla
			llamar menu2
			lea selec3
			si selec3 = 4 entonces 
			repita
				llamar limpiar_pantalla
					escriba "Escriba Numero de cedula de el empleado a actualizar"
					llamar nueva_linea
					lea value
					p<-0
					para i<- 1 hasta 1000 haga
						si value=inf[i].id entonces
							escriba "**********---Tiquete---*******************+"
							llamar nueva_linea
							escriba " *************Empresa " ,ne, "**********"
							llamar nueva_linea
							escriba "--------------------------------------------------------------------------------------------------------"
							escriba "|       Nombre del empleado    ", inf[i].name, "         |    Apellido del empleado     " ,inf[i].surname,"   |"
							llamar nueva_linea 
							escriba "--------------------------------------------------------------------------------------------------------"
							llamar nueva_linea
							escriba "|        Cargo actual del empleado  ", inf[i].carg,"   |Cedula del empleado       " ,inf[i].id, "   |"
							llamar nueva_linea
							escriba "--------------------------------------------------------------------------------------------------------"
							llamar nueva_linea
							escriba "|                                         Total a cobrar  " ,inf[i].base, "                                   |"
						    llamar nueva_linea 
							
						fin si
					fin para
					
					si p=0 entonces 
						escriba "Empleado no encontrado"
					fin si	
					llamar nueva_linea
					Escriba " Precione el numero 0 para salir___ "
					lea selec8
					hasta selec8= 0
					
					
			fin si
			
			
			si selec3= 3 entonces
			repita
			llamar limpiar_pantalla
			llamar buble(inf, con, temp)
			llamar nueva_linea
			escriba "Seleccione 0 paara Salir __"
			lea selec6
		    hasta selec6 = 0
			
			
			fin si
			si selec3 = 2 entonces
				repita
				
				escriba "Escriba Numero de cedula para registrar horas"
					llamar nueva_linea
					lea valu
					p<-0
					para i<- 1 hasta 1000 haga
						si valu=inf[i].id entonces
							repita 
							escriba " Horas diurna laboradas "
							llamar nueva_linea 
							lea hd
							llamar nueva_linea
							escriba " Horas nocturnas laboradas"
							llamar nueva_linea
							lea hn 
							llamar nueva_linea
							escriba " Horas dominicales diurnas "
							llamar nueva_linea
							lea hdd
							llamar nueva_linea
							escriba " Horas dominicales Nocturnas"
							llamar nueva_linea
							lea hdn
							llamar nueva_linea
							escriba " Horas extras diurnas "
							llamar nueva_linea
							lea hed
							llamar nueva_linea
							escriba " Horas extras nocturnas "
							llamar nueva_linea
							lea hen
							llamar nueva_linea
							escriba " Horas dominicales extra diurnas "
							llamar nueva_linea
							lea hded
							llamar nueva_linea
							escriba "Hora dominicales extra nocturnas   "
							llamar nueva_linea
							lea hden
							llamar nueva_linea 
							p<-p+1
							sum<-hd+hn+hdd+hdn+hed+hen+hded+hden
							si sum > con.ht entonces
								escriba "Error usted a sobrepasado el numero de horas laborables VUELVA A INTENTARLO "
								llamar nueva_linea
							fin si
							day<-(con.sm / 31)/8
							inf[i].base<- (hd*day)+((hn*day)+(hn*(day*0.35)))+((hdd*day)+(hdd*(day*0.75)))+((hdn*day)+(hdn*(day*1.1)))+((hed*day)+(hed*(day*0.25)))+((hen*day)+(hen*(day*0.75)))+((hded*day)+(hded*(day*2)))+((hden*day)+(hden*(day*1.5)))
							si inf[i].base <= con.smt*con.sm entonces
								inf[i].base<-inf[i].base + con.at
							fin si	
							si inf[i].base > con.cs*con.sm entonces
							inf[i].base<-(inf[i].base)-((inf[i].base) *((con.prf)/(100))) 
							fin si
								
							
							hasta sum<= con.ht
								
						fin si
					fin para
					si p=0 entonces 
					escriba "Contact not found"
					fin si
					llamar nueva_linea	
						escriba "Presione El  numero 0 para salir"
				    	lea selec5
					
					
				
				hasta selec5 = 0
				
			fin si
			si selec3 = 1 entonces
				repita	
					llamar limpiar_pantalla
					llamar menu3
					lea selec4
					si selec4 = 1 entonces
						llamar limpiar_pantalla
							escriba " Cantidad a agregar de empleados		"
						    lea n
							para i<-1 hasta n haga
								llamar inform (inf, con)
						Fin para
						 	
					fin si
					si selec4=2 entonces
					escriba "Escriba Numero de cedula de el empleado a actualizar"
					llamar nueva_linea
					lea value
					p<-0
					para i<- 1 hasta 1000 haga
						si value=inf[i].id entonces
							escriba "***---Informacion---***"
							llamar nueva_linea
							escriba "Nombre del empleado    ", inf[i].name
							llamar nueva_linea
							escriba "Apellido del empleado " ,inf[i].surname
							llamar nueva_linea 
							escriba "Cargo actual del empleado  ", inf[i].carg
							llamar nueva_linea
							escriba "Salario del empleado  " ,inf[i].salary
							llamar nueva_linea
							escriba "Cedula del empleado " ,inf[i].id
							llamar nueva_linea 
							escriba "---Actualizar---"
							llamar nueva_linea
							escriba "***---Informacion---***"
							llamar nueva_linea
							llamar inform (inf, con)
						fin si
					fin para
					
					si c=0 entonces 
						escriba "Contact not found"
					fin si	
					lea retorn
					si retorn <> pit entonces
					llamar menu3
					fin si
					fin si
					si selec4= 3 entonces
						llamar delete (inf)
					fin si
				hasta selec4 = 0
			fin si
		hasta selec3 = 0			
	fin si	
	si selec = 2 entonces
		repita
		llamar limpiar_pantalla
		llamar menu	
		lea selec1		
	si selec1=1 entonces
		
		llamar limpiar_pantalla
		escriba "**********Nombre de la Empresa***"
		llamar nueva_linea
		lea con.ne
		llamar nueva_linea
		escriba "Empresa ",con.ne
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
        sino si retorn<>pit entonces
        	llamar limpiar_pantalla
		fin si
	fin si	 
	si selec1=2 entonces
	llamar limpiar_pantalla
		escriba "**********Salario Minimo***"
		llamar nueva_linea
		lea con.sm
		llamar nueva_linea
		escriba "Salario Minimo Actial  ",con.sm
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
		si retorn <> pit entonces
		llamar menu
		fin si
	fin si
	si selec1=3 entonces
	llamar limpiar_pantalla
		escriba "********** Apartir de cuantos salario minimos se cobra retencion en la fuente ?.***"
		llamar nueva_linea
		escriba "**********Ingrese el numero de salarios***"
		llamar nueva_linea
		lea con.cs
		llamar nueva_linea
		escriba "Numero de salarios  ",con.cs
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
		si retorn <> pit entonces
		llamar menu
		fin si
	fin si
	si selec1=4 entonces
	llamar limpiar_pantalla
		escriba "********** Porcentaje de  retencion en la fuente ?.***"
		llamar nueva_linea
		escriba "**********Ingrese el porcentaje ***"
		llamar nueva_linea
		lea con.prf
		llamar nueva_linea
		escriba " El porcentaje de retencion en la fuente es   ",con.prf, "%"
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
		si retorn <> pit entonces
		llamar menu
		fin si
	fin si
	si selec1=5 entonces
	llamar limpiar_pantalla
		escriba "**********Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte.***"
		llamar nueva_linea
		escriba "**********Ingrese el numero de salarios ***"
		llamar nueva_linea
		lea con.smt
		llamar nueva_linea
		escriba " El numero de salarios es ",con.smt
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
		si retorn <> pit entonces
		llamar menu
		fin si
	fin si
	si selec1=6 entonces
	llamar limpiar_pantalla
		escriba "**********Cuanto es el auxilio de transporte***"
		llamar nueva_linea
		escriba "**********Ingrese el valor ***"
		llamar nueva_linea
		lea con.at
		llamar nueva_linea
		escriba " El valor de el auxilio de transporte es ",con.at
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
		si retorn <> pit entonces
		llamar menu
		fin si
	fin si
	si selec1=7 entonces
	llamar limpiar_pantalla
		escriba "**********Cantidad de horas laborables en el mes ***"
		llamar nueva_linea
		escriba "**********Ingrese el numero de horas***"
		llamar nueva_linea
		lea con.ht
		llamar nueva_linea
		escriba " El numero de horas laborables es",con.ht
		llamar nueva_linea
		escriba "Presione Cualquier tecla para regresar"
		lea retorn
		si retorn <> pit entonces
		llamar menu
		fin si
	fin si
	hasta selec1= 0
	fin si		
hasta selec = 0	
		
fin		