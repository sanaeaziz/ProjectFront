import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/common/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-add-edit',
  templateUrl: './admin-add-edit.component.html',
  styleUrls: ['./admin-add-edit.component.css']
})
export class AdminAddEditComponent implements OnInit {

  adminForm!: FormGroup;

  constructor(private _FormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {
    this.adminForm = this._FormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.adminForm.patchValue(this.data);
  }

  onFormSubmit(): void {
    if (this.adminForm.valid) {
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
        this.adminService.addAdmin(this.adminForm.value).subscribe(
          response => {
            console.log('Admin added');
            this.dialogRef.close(true);
          },
          error => {
            console.log('Error');
          }
        );
        console.log(this.adminForm.value);
      }
    }
  }

}

