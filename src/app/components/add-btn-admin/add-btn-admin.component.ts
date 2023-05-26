import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddEditComponent } from '../admin-add-edit/admin-add-edit.component';


@Component({
  selector: 'app-add-btn-admin',
  templateUrl: './add-btn-admin.component.html',
  styleUrls: ['./add-btn-admin.component.css']
})
export class AddBtnAdminComponent {
  constructor(private dialog: MatDialog) { }

  openAddAdminModal(): void {
    const dialogRef = this.dialog.open(AdminAddEditComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
      else {
        console.log(result);
      }
    });
  }
}
