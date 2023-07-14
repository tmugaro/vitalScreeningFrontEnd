import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { Patient } from '../models/patient';
import { Height } from '../models/height';
import { BloodPressure } from '../models/bloodPressure';
import { BloodGlucose } from '../models/bloodGlucose';
import { Weight } from '../models/weight';



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

  addWeight(weight : Weight): Observable<Weight> {
    return this.http.post<Weight>(this.addWeightURL,weight);
  }

  addHeight(height : Height): Observable<Height> {
    return this.http.post<Height>(this.addHeightURL,height);
  }

  addBloodGlucose(bloodGlucose : BloodGlucose): Observable<BloodGlucose> {
    return this.http.post<BloodGlucose>(this.addBloodGlucoseURL,bloodGlucose);
  }
  
  addBloodPressure(bloodPressure : BloodPressure): Observable<BloodPressure> {
    return this.http.post<BloodGlucose>(this.addBloodPressureURL,bloodPressure);
  }

  getWeight(weight : Weight): Observable<Weight> {
    return this.http.get<Weight>(this.getWeightURL);
  }

  getPatient(patient : Patient): Observable<Patient> {
    return this.http.get<Patient>(this.getPatientURL);
  }

  getBloodGlucose(bloodGlucose : BloodGlucose): Observable<BloodGlucose> {
    return this.http.get<BloodGlucose>(this.getBloodGlucoseURL);
  }

  getBloodPressure(bloodPressure : BloodPressure): Observable<BloodPressure> {
    return this.http.get<BloodPressure>(this.updateBloodPressureUrl);
  }

  updateWeight(weight : Weight): Observable<Weight> {
    return this.http.put<Weight>(this.updateWeightUrl,weight);
  }

  updateBloodPressure(bloodPressure : BloodPressure): Observable<BloodPressure> {
    return this.http.put<BloodPressure>(this.updateBloodPressureUrl,bloodPressure);
  }

  updateBloodGlucose(bloodGlucose : BloodGlucose): Observable<BloodGlucose> {
    return this.http.put<BloodGlucose>(this.updateBloodGlucoseUrl,bloodGlucose);
  }
  
  deleteeWeight(weight : Weight): Observable<Weight> {
    return this.http.delete<Weight>(this.deleteeWeightUrl);
  }

  deleteBloodPressure(bloodPressure : BloodPressure): Observable<BloodPressure> {
    return this.http.delete<BloodPressure>(this.deleteBloodPressureUrl);
  }

  deleteBloodGlucose(bloodGlucose : BloodGlucose): Observable<BloodGlucose> {
    return this.http.delete<BloodGlucose>(this.deleteBloodGlucoseUrl);
  }

  deletePatient(patient : Patient): Observable<Patient> {
    return this.http.delete<Patient>(this.deletePatientUrl);
  }

 





}