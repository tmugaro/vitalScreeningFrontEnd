import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';



export class PatientService {

addPatientURL : string;
addWeightURL : string;
addHeightURL : string;
addBloodGlucoseURL : string;
addBloodPressureURL : string;
getPatientURL : string;
getWeightURL : string;
getHeightURL : string;
getBloodGlucoseURL: string;
getBloodPressureURL  : string;
updateWeightUrl : string;
updateHeightUrl : string;
updateBloodPressureUrl : string;
updateBloodGlucoseUrl : string;
deleteeWeightUrl : string;
deleteHeightUrl : string;
deleteBloodPressureUrl : string;
deleteBloodGlucoseUrl : string;
deletePatientUrl : string;

constructor(private http : HttpClient) {

  this.addPatientURL = '/emp/addPatient';
  this.addWeightURL = '/emp/addWeight';
  this.addHeightURL = '/emp/addHeight';
  this.addBloodGlucoseURL = '/emp/addBloodGlucose';
  this.addBloodPressureURL = '/emp/addBloodPressure';
  this.getWeightURL = '/emp/getWeight';
  this.getPatientURL = '/emp/getPatient';
  this.getHeightURL = '/emp/getHeight';
  this.getBloodGlucoseURL = '/emp/getBloodGlucose';
  this.getBloodPressureURL = '/emp/getBloodPressure';
  this.updateWeightUrl = '/emp/updateWeight';
  this.updateHeightUrl = '/emp/updateHeight';
  this.updateBloodPressureUrl = '/emp/updateBloodPressure';
  this.updateBloodGlucoseUrl = '/emp/updateBloodGlucose';
  this.deleteeWeightUrl = '/emp/deleteWeightById';
  this.deleteHeightUrl = '/emp/deleteHeightById';
  this.deleteBloodPressureUrl = '/emp/deleteBloodPressureById';
  this.deleteBloodGlucoseUrl = '/emp/deleteBloodGlucoseById';
  this.deletePatientUrl = '/emp/deletePatientById';

 }
}