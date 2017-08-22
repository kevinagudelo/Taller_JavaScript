  class main {
    constructor{
      this.configG = [];
       this.empleados = []; 
  }
  continuar() {
    let option = parseInt(prompt(`1. Gestion de empleados
      2. Registrar horas laboradas
      3. Generar nomina
      4. Imprimir comprobante de pago
      8. Volver
      0. Salir del programa`));
    return option;
  }
 gestionEmpleados() {
    let option = parseInt(prompt(`1. Agregar
      2. Modificar
      3. Eliminar
      4. Volver
      0. Salir del programa`));

    return option;
  }
 config() {
    let option = parseInt(prompt(`    1. Configurar
      2. Continuar
      8. Seleccionar idioma  
      0. Salir`));
    return option;
  }
   configuration() {
    let option = parseInt(prompt(`1. Nombre de la empresa
      2. Salario minimo
      3. A partir de cuantos salarios minimos se cobra retencion en la fuente
      4. Porcentaje de retencion en la fuente
      5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte
      6. Cuanto es el auxilio de transporte
      7. Cantidad de horas laborables al mes
      8. Volver
      0. Salir del programa`));
    return option;
  }
  
 name() {
    let name = prompt('Por favor digite el nombre de tu empresa');
    this.global = {
      name
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  salaryMin() {
    let salary = parseInt(prompt('Por favir digite el salario de tu empresa'));
    this.global = {
      salary
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
   minRetention() {
    let mRetention = parseInt(prompt('Apartir de cuantos salarios minimos se cobrara retencion en la fuente?'));
    this.global = {
      mRetention
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  percentage() {
    let percentageR = parseInt(prompt('Porcentaje de retencion en la fuente? (%)'));
    this.global = {
      percentageR
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
   maxSalary() {
    let mSalary = parseInt(prompt('Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte?'));
    this.global = {
      mSalary
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
 aux() {
    let aux = parseInt(prompt('Cuanto es el auxilio de transporte?'));
    this.global = {
      aux
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
 horasM() {
    let h = parseInt(prompt('Cantidad de horas laborables al mes?'));
    this.global = {
      h
    };
    this.configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      this.configG = [
        this.global
      ];
    } else {
      this.configG.push(this.global);
    }
    localStorage.setItem('config', JSON.stringify(this.configG));
    this.validateConfiguration();
    return this.configG;
  }
  validateConfiguration() {
    this.option = this.configuration();
    switch (this.option) {
      case 1:
        this.name();
        break;
      case 2:
        this.salaryMin();
        break;
      case 3:
        this.minRetention();
        break;
      case 4:
        this.percentage();
        break;
      case 5:
        this.maxSalary();
        break;
      case 6:
        this.aux();
        break;
      case 7:
        this.horasM();
        break;
      case 8:
        this.validate();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        this.validateConfiguration();
        break;
    }
  }
   validateGestion() {
    this.option = this.gestionEmpleados();
    switch (this.option) {
      case 1:
        this.add();
        break;
      case 2:
        this.edit();
        break;
      case 3:
        this.eliminar();
        break;
      case 4:
        this.validateContinuar();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        break;
    }
  }
  
  add() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    if (this.empleados === null) {
      var cedula = prompt(`Cedula del nuevo empleado?`);
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
        for (let config of this.empleados) {
          for (let e in config) {
            if (config[e] === cedula) {
              flag = config[e];
            }
          }
        }
      } while (cedula === flag);
    }
    let nombre = prompt(`Nombre del nuevo empleado?`);
    let apellido = prompt(`Apellido del nuevo empleado?`);
    let cargo = prompt(`Cargo del nuevo empleado?`);
    empleados = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salario del nuevo empleado?`));
      for (config of this.empleados) {
        for (e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    this.personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    if (this.empleados === null) {
      this.empleados = [
        this.personal
      ];
    } else {
      this.empleados.push(this.personal);
    }
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion();
    return this.personal;
  }
  edit() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    var object = 0;
    var flag = false;
    do {
      var cedula = parseInt(prompt(`Por favor ingrese el numero de cedula?`));
      for (i = 0; i < this.empleados.length; i++) {
        for (let datas in this.empleados[i]) {
          if (this.empleados[i][datas] === cedula) {
            flag = true;
            object = i;
          }
        }
      }
    } while (flag === false);
    if (empleados === null) {
      var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
        for (let config of this.empleados) {
          for (let e in config) {
            if (config[e] === cedula) {
              flag = config[e];
            }
          }
        }
      } while (cedula === flag);
    }
    let nombre = prompt(`Nombre del nuevo empleado?`);
    let apellido = prompt(`Apellido del nuevo empleado?`);
    let cargo = prompt(`Cargo del nuevo empleado?`);
    this.configG = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salario del nuevo empleado?`));
      for (config of this.configG) {
        for (e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    this.personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    this.empleados[object] = this.personal;
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion();
    return this.empleados;
  }
  eliminar() {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
    let flag = false;
    let cedula = parseInt(prompt('Numero de cedula del empleado que deseas eliminar?'));
    var object = 0;
    for (let i = 0; i < this.empleados.length; i++) {
      for (let emple in this.empleados[i]) {
        if (this.empleados[i][emple] === cedula) {
          var object = i;
          flag = true;
          if (flag === true) {
            var con = confirm(`Deseas Eliminar a ${this.empleados[object].nombre} ${this.empleados[object].apellido}`);
            if (con) {
              flag = true;
            } else {
              flag = false;
              this.validateGestion();
              break;
            }
          }
        }
      }
    }
    if (!flag) {
      alert(`El numero de cedula ${cedula} no se encuntra registrado`);
    }
    if (flag) {
      this.empleados.splice(object, 1);
    }
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.validateGestion();
    return this.empleados;
  }
  hoursLab() {
    if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
      alert('No tienes configurado tu sistema o no tienes empleados registrados');
      this.validate();
    } else {
  //  obtener las horas laborables de la empresa desde el localStorage
      var hoursMin = 0;
      let hoursConfig = JSON.parse(localStorage.getItem('config'));
      hoursConfig.forEach((e) => {
        for (i in e) {
          if (i === 'h') {
            hoursMin = e[i];
          }
        }
      });
   let names = '';
      JSON.parse(localStorage.getItem('config')).forEach((e) => {
        if (e.name !== undefined) {
          names = e.name;
        }
      });
      let find = parseInt(prompt('Cedula del empleado a registrar las horas?'));
      this.emple = JSON.parse(localStorage.getItem('empleados'));
      var tmp = 0;
      var salary = 0;
      var id = '';
      emple.forEach((e) => {
        if (e.cedula === find) {
          id = e.cedula;
          tmp++;
          salary = e.salario;
        }
      });
      if (tmp !== 0) {
        let i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var daytimeHours = parseInt(prompt('Cuantas horas diurnas has trabajado'));
        } while (daytimeHours > hoursMin);
        i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var nightHours = parseInt(prompt('Cuantas horas nocturnas has trabajado'));
        } while ((nightHours > hoursMin) || ((daytimeHours + nightHours) > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var daytimeSundayHours = parseInt(prompt('Cuantas horas dominicales diurnas has trabajado'));
        } while ((daytimeSundayHours > hoursMin) || (daytimeHours + daytimeSundayHours > hoursMin) || (nightHours + daytimeSundayHours > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
          }
          i++;
          var nightSundayHours = parseInt(prompt('Cuantas horas dominicales nocturnas has trabajado'));
        } while ((nightSundayHours > hoursMin) || (daytimeHours + nightSundayHours > hoursMin) || (nightHours + nightSundayHours > hoursMin) || (daytimeSundayHours + nightSundayHours > hoursMin));
        let daytimeOvertime = parseInt(prompt('Cuantas horas extras diurnas has trabajado'));
        let nightOvertime = parseInt(prompt('Cuantas horas extras nocturnas has trabajado'));
        let daytimeExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra diurnas has trabajado'));
        let nightExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra nocturnas has trabajado'));
        // Saber cuanto es el precio hora del trabajador
        let pHours = (salary / hoursMin);
        let hoursDay = pHours;
        let hoursNight = (pHours * 35) / 100;
        let daySundayHours = (pHours * 75) / 100;
        let sundayNightHours = (pHours * 110) / 100;
        let hoursExtraDay = (pHours * 25) / 100;
        let hoursExtraNight = (pHours * 75) / 100;
        let hoursSundayExtraDay = (pHours * 100) / 100;
        let hoursSundayExtraNight = (pHours * 150) / 100;
        // Objeto con las horas trabajadas
        let hoursLaborable = {
          daytimeHours,
          nightHours,
          daytimeSundayHours,
          nightSundayHours,
          daytimeOvertime,
          nightOvertime,
          daytimeExtraSundayHours,
          nightExtraSundayHours
        };
       let vHoursLab = {
          'Horas Diurnas': hoursDay * daytimeHours,
          'Horas Nocturnas': hoursNight * nightHours,
          'Horas Dominicales Diurnas': daySundayHours * daytimeSundayHours,
          'Horas Dominicales Nocturnas': sundayNightHours * nightSundayHours,
          'Horas Extra Diurnas': hoursExtraDay * daytimeOvertime,
          'Horas Extra Nocturnas': hoursExtraNight * nightOvertime,
          'Horas Dominicales Extra Diurnas': hoursSundayExtraDay * daytimeExtraSundayHours,
          'Horas Dominicales Extra Nocturnas': hoursSundayExtraNight * nightExtraSundayHours
        };
        this.hoursLaborales = {
          id,
          hoursLaborable,
          vHoursLab
        };
        this.horasLaboradas = JSON.parse(localStorage.getItem('horasLaboradas'));
        if (horasLaboradas === null) {
          let horasLaboradas = [hoursLaborales];
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        } else {
          horasLaboradas.push(hoursLaborales);
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        }
        this.validateContinuar();
      } else {
        alert('El empleado no se encuentra registrado');
        this.validateContinuar();
      }
    }
  }
 nomina() {
    if ((JSON.parse(localStorage.getItem('config')) === null) || (JSON.parse(localStorage.getItem('empleados')) === null) || (JSON.parse(localStorage.getItem('horasLaboradas')) === null)) {
      alert('No tienes configurado tu sistema, no tienes empleados registrados o no tienes horas registradas');
      this.validate();
    } else {
      var auxTransport = JSON.parse(localStorage.getItem('config'));
      var salary = 0;
      var salaryRetention = 0;
      var percentageRetention = 0;
      var mSalary = 0;
      auxTransport.forEach((e) => {
        for (let i in e) {
          switch (i) {
            case 'salary':
              salary = e[i];
              break;
            case 'mRetention':
              salaryRetention = e[i];
              break;
            case 'percentageR':
              percentageRetention = e[i];
              break;
            case 'aux':
              auxTransport = e[i];
              break;
            case 'mSalary':
              mSalary = e[i];
              break;
          }
        }
      });
      this.array = [];
      this.empleados = JSON.parse(localStorage.getItem('empleados'));
      let ant = 0;
      for (let i = 0; i <= this.empleados.length - 1; i++) {
        if (this.empleados[i + 1] !== undefined) {
          if (this.empleados[i].cedula > this.empleados[i + 1].cedula) {
            ant = this.empleados[i];
            this.empleados[i] = this.empleados[i + 1];
            this.empleados[i + 1] = ant;
          }
        }
      }
      this.nominas = [];
      console.log(` -- Cedula -- Cargo -- Total A Pagar --`);
      this.empleados.forEach((e) => {
        this.hoursLaborables = JSON.parse(localStorage.getItem('horasLaboradas'));
        this.hoursLaborables.forEach((j) => {
          if (j.id === e.cedula) {
            for (let hours in j.vHoursLab) {
              this.array.push(j.vHoursLab[hours]);
            }
            var total = 0;
            this.array = this.array.slice(-8);
            this.array.forEach((i) => {
              total += i;
            });
            if (total > (salary * salaryRetention)) {
              let subs = total * percentageRetention / 100;
              total -= subs;
            }
            if (total <= (salary * mSalary)) {
              total += auxTransport;
            }
            if (total <= (salary * 1)) {
              let alimentation = (salary * 20) / 100;
              total += alimentation;
            }
            total = parseInt(total);
            total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = total.split('').reverse().join('').replace(/^[\.]/, '');
            let cedula = e.cedula;
            let cargo = e.cargo;
            let tot = total;
            this.nomina = {
              cedula,
              cargo,
              tot
            };
            this.nomin = JSON.parse(localStorage.getItem('nomina'));
            if (nomin === null) {
              this.nominas = [nomina];
              localStorage.setItem('nomina', JSON.stringify(this.nominas));
            } else {
              this.nominas.push(this.nomina);
              localStorage.setItem('nomina', JSON.stringify(this.nominas));
            }
            console.log(`${e.cedula} -- ${e.cargo} -- $${total}`);
          }
        });
      });
    }
  }
  pago() {
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    var config = JSON.parse(localStorage.getItem('config'));
    if (empleados === null) {
      alert('No hay empleados registrados');
      validateContinuar();
    } else {
      let find = parseInt(prompt('Digite la cedula para el comprobante de pago?'));
      var tmp = 0;
      var name = '';
      var cargo = '';
      var paguis = 0;
      empleados.forEach((e) => {
        if (e.cedula === find) {
          tmp++;
          name = e.nombre;
          cargo = e.cargo;
          let pague = JSON.parse(localStorage.getItem('nomina'));
          pague.forEach((j) => {
            if (e.cedula === j.cedula) {
              paguis = j.tot;
            }
          });
        }
      });
      if (tmp === 0) {
        alert('El empleado no se encuentra registrado en la base de datos');
        validateContinuar();
      } else {
        console.log(`===================================================`);
        console.log('||                 Empresa   '+config[0].name+'      ||');
        console.log(`||          El Empleado               ||`);
        console.log(`||  Recibio una suma total de:  ${paguis}    ||`);
        console.log(`===================================================`);
       }
    }
  }
  function validateContinuar() {
    let option = continuar();
    switch (option) {
      case 1:
        validateGestion();
        break;
      case 2:
        hoursLab();
        break;
      case 3:
        nomina();
        break;
      case 4:
        pago();
        break;
      case 8:
        validate ();
      case 0:
        alert('Adios');
        break;
      default:
        validateContinuar();
        break;
    }
  }
  function validate() {
    let option = config();
    switch (option) {
      case 1:
        validateConfiguration();
        break;
      case 2:
        validateContinuar();
        break;
      case 8 : 
        inicio ();
        break;
      case 0:
        alert('Adios');
        break;
      default:
        validate();
        break;
    }
  }

  function config2() {
    let option = Number(prompt(`1. Configure
  2. Continue
  8  Select language  
  0. Exit`));
    return option;
  }
  function idioma2() {
    let option = parseInt(prompt(`Select the software language
  1. Spanish
  2. English
  0. Exit`));
    return option;
  }
  function configuration2() {
    let option = parseInt(prompt(`1. Name of the company
  2. Minimum wage
  3. How many minimum wages are conserved at the source
  4. Percentage retention at source
  5. Up to how many minimum wages are needed to pay transport aid
  6. How much does transport aid cost?
  7. Number of hours of work per month
  8. Back
  0. Quit the program`));
    return option;
  }
  function name2() {
    let name = prompt('Enter the name of your company');
    global = {
      name
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function salaryMin2() {
    let salary = parseInt(prompt("Enter your company's salary"));
    global = {
      salary
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function minRetention2() {
    let mRetention = parseInt(prompt('How many minimum wages does the withholding tax charge?'));
    global = {
      mRetention
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function percentage2() {
    let percentageR = parseInt(prompt('Percentage withholding at source? (%)'));
    global = {
      percentageR
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function maxSalary2() {
    let mSalary = parseInt(prompt('How many minimum wages do you need to pay for transport aid?'));
    global = {
      mSalary
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function aux2() {
    let aux = parseInt(prompt('How much does transport help cost?'));
    global = {
      aux
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function horasM2() {
    let h = parseInt(prompt('Number of hours of work per month?'));
    global = {
      h
    };
    configG = JSON.parse(localStorage.getItem('config'));
    if (JSON.parse(localStorage.getItem('config')) === null) {
      configG = [
        global
      ];
    } else {
      configG.push(global);
    }
    localStorage.setItem('config', JSON.stringify(configG));
    validateconfiguration2();
    return configG;
  }
  function validateconfiguration2() {
    let option = configuration2();
    switch (option) {
      case 1:
        name2();
        break;
      case 2:
        salaryMin2();
        break;
      case 3:
        minRetention2();
        break;
      case 4:
        percentage2();
        break;
      case 5:
        maxSalary2();
        break;
      case 6:
        aux2();
        break;
      case 7:
        horasM2();
        break;
      case 8:
        validate2();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        validateconfiguration2();
        break;
    }
  }
  function continuar2() {
    let option = parseInt(prompt(`
  1. Employee management
  2. Record of hours worked
  3. Generate payroll
  4. Print proof of payment
  8. Back  
  0. Quit the program`));
    return option;
  }
  function gestionEmpleados2() {
    let option = parseInt(prompt(`
  1. Add
  2. Modify
  3. Delete
  4. Back
  0. Quit the program`));
    return option;
  }
  function validateGestion2() {
    let option = gestionEmpleados2();
    switch (option) {
      case 1:
        add2();
        break;
      case 2:
        edit2();
        break;
      case 3:
        eliminar2();
        break;
      case 4:
        validatecontinuar2();
        break;
      case 0:
        alert('Bay');
        break;
      default:
        break;
    }
  }
  function add2() {
    empleados = JSON.parse(localStorage.getItem('empleados'));
    if (empleados === null) {
      var cedula = prompt(`New employee ID card?`);
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`New employee ID card?`));
        for (let config of empleados) {
          for (let e in config) {
            if (config[e] === cedula) {
              flag = config[e];
            }
          }
        }
      } while (cedula === flag);
    }
    let nombre = prompt(`Name of new employee?`);
    let apellido = prompt(`Surname of the new employee?`);
    let cargo = prompt(`New Employee Charge?`);
    empleados = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salary of the new employee?`));
      for (config of empleados) {
        for (e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    if (empleados === null) {
      empleados = [
        personal
      ];
    } else {
      empleados.push(personal);
    }
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion2();
    return personal;
  }
  function edit2() {
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    var object = 0;
    var flag = false;
    do {
      var cedula = parseInt(prompt(`Please enter the ID number?`));
      for (i = 0; i < empleados.length; i++) {
        for (let datas in empleados[i]) {
          if (empleados[i][datas] === cedula) {
            flag = true;
            object = i;
          }
        }
      }
    } while (flag === false);
    if (empleados === null) {
      var cedula = parseInt(prompt(`New Employee ID Card?`));
    } else {
      let flag = false;
      do {
        var cedula = parseInt(prompt(`New Employee ID Card?`));
        for (let config of empleados) {
          for (let e in config) {
            if (config[e] === cedula) {
              flag = config[e];
            }
          }
        }
      } while (cedula === flag);
    }
    let nombre = prompt(`Name of new employee?`);
    let apellido = prompt(`Surname of the new employee?`);
    let cargo = prompt(`New Employee Charge?`);
    let configG = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salary of the new employee?`));
      for (config of configG) {
        for (e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    empleados[object] = personal;
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion2();
    return empleados;
  }
  function eliminar2() {
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    let flag = false;
    let cedula = parseInt(prompt('Identification number of the employee you want to delete?'));
    var object = 0;
    for (let i = 0; i < empleados.length; i++) {
      for (let emple in empleados[i]) {
        if (empleados[i][emple] === cedula) {
          var object = i;
          flag = true;
          if (flag === true) {
            var con = confirm(`Delete the ${empleados[object].nombre} ${empleados[object].apellido}`);
            if (con) {
              flag = true;
            } else {
              flag = false;
              validateGestion2();
              break;
            }
          }
        }
      }
    }
    if (!flag) {
      alert(`The ID number ${cedula} Not registered`);
    }
    if (flag) {
      empleados.splice(object, 1);
    }
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion2();
    return empleados;
  }
  function hoursLab2() {
    if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
      alert('You have not set up your system or have no registered employees');
      validate2();
    } else {
      var hoursMin = 0;
      let hoursConfig = JSON.parse(localStorage.getItem('config'));
      hoursConfig.forEach((e) => {
        for (i in e) {
          if (i === 'h') {
            hoursMin = e[i];
          }
        }
      });
      let names = '';
      JSON.parse(localStorage.getItem('config')).forEach((e) => {
        if (e.name !== undefined) {
          names = e.name;
        }
      });
      let find = parseInt(prompt('ID used to record the hours?'));
      let emple = JSON.parse(localStorage.getItem('empleados'));
      var tmp = 0;
      var salary = 0;
      var id = '';
      emple.forEach((e) => {
        if (e.cedula === find) {
          id = e.cedula;
          tmp++;
          salary = e.salario;
        }
      });
      if (tmp !== 0) {
        let i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var daytimeHours = parseInt(prompt('How many hours of day have you worked?'));
        } while (daytimeHours > hoursMin);
        i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var nightHours = parseInt(prompt('How many hours at night did you work?'));
        } while ((nightHours > hoursMin) || ((daytimeHours + nightHours) > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var daytimeSundayHours = parseInt(prompt('How many daytime hours have you worked'));
        } while ((daytimeSundayHours > hoursMin) || (daytimeHours + daytimeSundayHours > hoursMin) || (nightHours + daytimeSundayHours > hoursMin));
        i = 0;
        do {
          if (i !== 0) {
            alert(`You have entered more hours from the hours previously set by your company ${names}`);
          }
          i++;
          var nightSundayHours = parseInt(prompt('How many Sunday night hours have you worked'));
        } while ((nightSundayHours > hoursMin) || (daytimeHours + nightSundayHours > hoursMin) || (nightHours + nightSundayHours > hoursMin) || (daytimeSundayHours + nightSundayHours > hoursMin));
        let daytimeOvertime = parseInt(prompt('How many daytime overtime have you worked'));
        let nightOvertime = parseInt(prompt('How many night overtime have you worked'));
        let daytimeExtraSundayHours = parseInt(prompt('How many hours of daytime extra Sunday have you worked'));
        let nightExtraSundayHours = parseInt(prompt('How many Sunday night extra hours have you worked'));
        // Saber cuanto es el precio hora del trabajador
        let pHours = (salary / hoursMin);
        let hoursDay = pHours;
        let hoursNight = (pHours * 35) / 100;
        let daySundayHours = (pHours * 75) / 100;
        let sundayNightHours = (pHours * 110) / 100;
        let hoursExtraDay = (pHours * 25) / 100;
        let hoursExtraNight = (pHours * 75) / 100;
        let hoursSundayExtraDay = (pHours * 100) / 100;
        let hoursSundayExtraNight = (pHours * 150) / 100;
        // Objeto con las horas trabajadas
        let hoursLaborable = {
          daytimeHours,
          nightHours,
          daytimeSundayHours,
          nightSundayHours,
          daytimeOvertime,
          nightOvertime,
          daytimeExtraSundayHours,
          nightExtraSundayHours
        };
        let vHoursLab = {
          'Horas Diurnas': hoursDay * daytimeHours,
          'Horas Nocturnas': hoursNight * nightHours,
          'Horas Dominicales Diurnas': daySundayHours * daytimeSundayHours,
          'Horas Dominicales Nocturnas': sundayNightHours * nightSundayHours,
          'Horas Extra Diurnas': hoursExtraDay * daytimeOvertime,
          'Horas Extra Nocturnas': hoursExtraNight * nightOvertime,
          'Horas Dominicales Extra Diurnas': hoursSundayExtraDay * daytimeExtraSundayHours,
          'Horas Dominicales Extra Nocturnas': hoursSundayExtraNight * nightExtraSundayHours
        };
        let hoursLaborales = {
          id,
          hoursLaborable,
          vHoursLab
        };
        let horasLaboradas = JSON.parse(localStorage.getItem('horasLaboradas'));
        if (horasLaboradas === null) {
          let horasLaboradas = [hoursLaborales];
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        } else {
          horasLaboradas.push(hoursLaborales);
          localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
        }
        validatecontinuar2();
      } else {
        alert('The employee is not registered');
        validatecontinuar2();
      }
    }
  }
  function nomina2() {
    if ((JSON.parse(localStorage.getItem('config')) === null) || (JSON.parse(localStorage.getItem('empleados')) === null) || (JSON.parse(localStorage.getItem('horasLaboradas')) === null)) {
      alert('You have not set up your system, have no registered employees, or have no recorded hours');
      validate2();
    } else {
      var auxTransport = JSON.parse(localStorage.getItem('config'));
      var salary = 0;
      var salaryRetention = 0;
      var percentageRetention = 0;
      var mSalary = 0;
      auxTransport.forEach((e) => {
        for (let i in e) {
          switch (i) {
            case 'salary':
              salary = e[i];
              break;
            case 'mRetention':
              salaryRetention = e[i];
              break;
            case 'percentageR':
              percentageRetention = e[i];
              break;
            case 'aux':
              auxTransport = e[i];
              break;
            case 'mSalary':
              mSalary = e[i];
              break;
          }
        }
      });
      var array = [];
      let empleados = JSON.parse(localStorage.getItem('empleados'));
      let ant = 0;
      for (let i = 0; i <= empleados.length - 1; i++) {
        if (empleados[i + 1] !== undefined) {

          if (empleados[i].cedula > empleados[i + 1].cedula) {
            ant = empleados[i];
            empleados[i] = empleados[i + 1];
            empleados[i + 1] = ant;
          }
        }
      }
      var nominas = [];
      console.log(` -- Identification card -- Position -- Total to pay --`);
      empleados.forEach((e) => {
        let hoursLaborables = JSON.parse(localStorage.getItem('horasLaboradas'));
        hoursLaborables.forEach((j) => {
          if (j.id === e.cedula) {
            for (let hours in j.vHoursLab) {
              array.push(j.vHoursLab[hours]);
            }
            var total = 0;
            array = array.slice(-8);
            array.forEach((i) => {
              total += i;
            });
            if (total > (salary * salaryRetention)) {
              let subs = total * percentageRetention / 100;
              total -= subs;
            }
            if (total <= (salary * mSalary)) {
              total += auxTransport;
            }
            if (total <= (salary * 1)) {
              let alimentation = (salary * 20) / 100;
              total += alimentation;
            }
            total = parseInt(total);
            total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = total.split('').reverse().join('').replace(/^[\.]/, '');
            let cedula = e.cedula;
            let cargo = e.cargo;
            let tot = total;
            var nomina = {
              cedula,
              cargo,
              tot
            };
            let nomin = JSON.parse(localStorage.getItem('nomina'));
            if (nomin === null) {
              nominas = [nomina];
              localStorage.setItem('nomina', JSON.stringify(nominas));
            } else {
              nominas.push(nomina);
              localStorage.setItem('nomina', JSON.stringify(nominas));
            }
            console.log(`${e.cedula} -- ${e.cargo} -- $${total}`);
          }
        });
      });
    }
  }
  function pago2() {
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    var config = JSON.parse(localStorage.getItem('config'));
    if (empleados === null) {
      alert('No registered employees');
      validatecontinuar2();
    } else {
      let find = parseInt(prompt('Enter ID for proof of payment?'));
      var tmp = 0;
      var name = '';
      var cargo = '';
      var paguis = 0;
      empleados.forEach((e) => {
        if (e.cedula === find) {
          tmp++;
          name = e.nombre;
          cargo = e.cargo;
          let pague = JSON.parse(localStorage.getItem('nomina'));
          pague.forEach((j) => {
            if (e.cedula === j.cedula) {
              paguis = j.tot;
            }
          });
        }
      });
      if (tmp === 0) {
        alert('The employee is not registered in the database');
        validatecontinuar2();
      } else {
        console.log(`===================================================`);
        console.log('||                 Company   '+config[0].name+'    ||');
        console.log(`||          The Employe                ||`);
        console.log(`||  Recivied a sum of  ${paguis}    ||`);
        console.log(`===================================================`);
      }
    }
  }
  function validatecontinuar2() {
    let option = continuar2();
    switch (option) { 
      case 1:
        validateGestion2();
        break;
      case 2:
        hoursLab2();
        break;
      case 3:
        nomina2();
        break;
      case 4:
        pago2();
        break;
      case 8:
      validate2 ();
      case 0:
        alert('End');
        break;
      default:
        validatecontinuar2();
        break;
    }
  }
  function inicio (){
  let opt = idioma2();
        switch (opt) {
          case 1:
            validate();
            break;
          case 2:
            validate2();
            break;
          case 0:
            alert('End');
            break;
          default:
            validate2();
            break;
        }
    }
  function validate2() {
  let option = config2();
    switch (option) {  
      case 1:
        validateconfiguration2();
        break;
      case 2:
        validatecontinuar2();
        break;
      case 8:
      inicio ();
      break;
      case 0:
        alert('End');
        break;
      default:
        validate2();
        break;
    }
  }
  inicio ();