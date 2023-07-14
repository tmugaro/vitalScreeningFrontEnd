import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './vitals_screening.component.html',
  styleUrls: ['./app.component.css']
})

export class VitalsScreeningComponent implements OnInit {

    patientVitalDetail !: FormGroup;
    patientVitalObj : Patient = new Patient();
    patientVitalList : Patient[] = [];
  
    constructor(private formBuilder : FormBuilder, private patientService : PatientService) { }
  
    ngOnInit(): void {
  
      this.getAllPatients();
  
      this.patientVitalDetail = this.formBuilder.group({
        id : [''],
        firstName : [''],
        lastName : [''],
        gender : [''],
        phoneNumber: [''],
        height : [''],
        weight: [''],
        bloodGlucose: [''],
        systolicBloodPressure: [''],
        diastolicBloodPressure: [''],
        emailAddress : [''],
    });

    
    addPatientVitals() {

        console.log(this.patientVitalDetail);
        
        this.patientVitalObj.id = this.patientVitalDetail.value.id;
        this.patientVitalObj.firstName = this.patientVitalDetail.value.firstName;
        this.patientVitalObj.lastName = this.patientVitalDetail.value.lastName;
        this.patientVitalObj.gender = this.patientVitalDetail.value.gender;
        this.patientVitalObj.phoneNumber = this.patientVitalDetail.value.phoneNumber;
        this.patientVitalObj.height = this.patientVitalDetail.value.height;
        this.patientVitalObj.weight = this.patientVitalDetail.value.weight;
        this.patientVitalObj.bloodGlucose = this.patientVitalDetail.value.bloodGlucose;
        this.patientVitalObj.systolicBloodPressure = this.patientVitalDetail.value.systolicBloodPressure;
        this.patientVitalObj.diastolicBloodPressure = this.patientVitalDetail.value.diastolicBloodPressure;
        this.patientVitalObj.emailAddress = this.patientVitalDetail.value.emailAddress;
    
    
    
        this.patientService.addPatient(this.patientVitalObj).subscribe((res: any)=>{
            console.log(res);
            this.getAllPatients();
        },(err: any)=>{
            console.log(err);
        });
    
      }
    }
    
    getAllPatients() {
        this.patientService.getAllPatients().subscribe((res: any)=>{
            this.patientVitalList = res;
        },(err: any)=>{
            console.log(err);
        });
}
}

//     editPatients(patient : Patient) {
//         this.patientVitalDetail.controls['id'].setValue(patient.id);
//         this.patientVitalDetail.controls['firstName'].setValue(patient.firstName);
//         this.patientVitalDetail.controls['lastName'].setValue(patient.lastName);
//         this.patientVitalDetail.controls['gender'].setValue(patient.gender);

//   }

    

function addPatientVitals() {
    throw new Error('Function not implemented.');
}

function editPatients(patient: any, Patient: any) {
    throw new Error('Function not implemented.');
}

