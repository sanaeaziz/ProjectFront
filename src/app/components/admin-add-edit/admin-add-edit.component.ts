import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/common/admin';
import { AdminService } from 'src/app/services/admin.service';
import { Departement } from 'src/app/common/departement';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-add-edit',
  templateUrl: './admin-add-edit.component.html',
  styleUrls: ['./admin-add-edit.component.css']
})
export class AdminAddEditComponent implements OnInit {
  departements: any[] = [];
  admin: Admin = new Admin();
  password: string = '';
  adminForm!: FormGroup;
  passwordHidden: boolean = true;



  constructor(private _FormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private http: HttpClient

  ) {
    this.adminForm = this._FormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      phone: ['', Validators.required],
      sexe: ['', Validators.required],
      password: ['', Validators.required],
      departement: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.adminForm.patchValue(this.data);
    this.generatePassword();
    this.fetchDepartments();
  }

  onFormSubmit(): void {
    // if (this.adminForm.valid) {
    if (this.data) {
      this.adminService.updateAdmin(this.data.id, this.adminForm.value).subscribe(
        response => {
          console.log('Admins updated');
          this.dialogRef.close(true);
        },
        error => {
          console.log('Error');
        }
      );
    }

    else {

      const adminData: Admin = {
        firstName: this.adminForm.value.firstName,
        lastName: this.adminForm.value.lastName,
        email: this.adminForm.value.email,
        dateBirth: this.adminForm.value.dateBirth,
        phone: this.adminForm.value.phone,
        sexe: this.adminForm.value.sexe,
        password: this.adminForm.value.password,
        departement: this.adminForm.value.departement,
      };
      this.adminService.addAdmin(adminData).subscribe(
        response => {
          console.log('Admin added');
          console.log(adminData);
          this.dialogRef.close(true);
        },
        error => {
          console.log('Error');
        }
      );
      console.log(adminData);
    }
    // }


  }


  // generatePassword(): void {
  //   const length = 8; // specify the desired length of the password
  //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   let password = '';
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * chars.length);
  //     password += chars.charAt(randomIndex);
  //   }
  //   this.password = password;
  // }

  generatePassword(): void {
    // Generate a random password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.password = password;

    // Update the form control value
    this.adminForm.controls['password'].setValue(this.password);
  }


  // generateRandomPassword(length: number): string {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  //   let password = '';
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     password += characters.charAt(randomIndex);
  //   }
  //   return password;
  // }

  // generatePassword() {
  //   this.password = this.generateRandomPassword(10);
  // }



  togglePasswordVisibility(): void {
    this.passwordHidden = !this.passwordHidden;
  }

  // pour assigner chaque admin a une departement

  fetchDepartments(): void {
    this.adminService.getDepartementList()
      .subscribe(departements => {

        this.departements = departements;
        console.log(departements);
      },
        error => {
          console.log('Error occurred while loading departments:', error);
        }
      );
  }

  // addAdmin(): void {
  //   // Send the admin data including the departmentId to the backend
  //   this.http.post('/api/admins', this.admin)
  //     .subscribe(response => {
  //       // Handle the response
  //     });
  // }



}

