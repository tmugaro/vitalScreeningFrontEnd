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

  this.addPatientURL = '/vital/addPatient';
  this.addWeightURL = '/vital/addWeight';
  this.addHeightURL = '/vital/addHeight';
  this.addBloodGlucoseURL = '/vital/addBloodGlucose';
  this.addBloodPressureURL = '/vital/addBloodPressure';
  this.getWeightURL = '/vital/getWeight';
  this.getPatientURL = '/vital/getPatient';
  this.getHeightURL = '/vital/getHeight';
  this.getBloodGlucoseURL = '/vital/getBloodGlucose';
  this.getBloodPressureURL = '/vital/getBloodPressure';
  this.updateWeightUrl = '/vital/updateWeight';
  this.updateHeightUrl = '/vital/updateHeight';
  this.updateBloodPressureUrl = '/vital/updateBloodPressure';
  this.updateBloodGlucoseUrl = '/vital/updateBloodGlucose';
  this.deleteeWeightUrl = '/vital/deleteWeightById';
  this.deleteHeightUrl = '/vital/deleteHeightById';
  this.deleteBloodPressureUrl = '/vital/deleteBloodPressureById';
  this.deleteBloodGlucoseUrl = '/vital/deleteBloodGlucoseById';
  this.deletePatientUrl = '/vital/deletePatientById';

 }

 addPatient(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.addPatientURL,patient);
  }

  addWeight(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.addWeightURL,patient);
  }

  addHeight(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.addHeightURL,patient);
  }

  addBloodGlucose(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.addBloodGlucoseURL,patient);
  }
  
  addBloodPressure(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.addBloodPressureURL,patient);
  }

  getWeight(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.getWeightURL,patient);
  }

  getPatient(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.getPatientURL,patient);
  }

  getBloodGlucose(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.getBloodGlucoseURL,patient);
  }

  getBloodPressure(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.updateBloodPressureUrl,patient);
  }

  updateWeight(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.updateWeightUrl,patient);
  }

  updateBloodPressure(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.updateBloodPressureUrl,patient);
  }

  updateBloodGlucose(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.updateBloodGlucoseUrl,patient);
  }
  
  deleteeWeight(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.deleteeWeightUrl,patient);
  }

  deleteBloodPressure(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.deleteBloodPressureUrl,patient);
  }

  deleteBloodGlucose(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.deleteBloodGlucoseUrl,patient);
  }

  deletePatient(patient : Patient): Observable<Patient> {
    return this.http.post<Patient>(this.deletePatientUrl,patient);
  }

 





}