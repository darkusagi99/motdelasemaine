import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.css'
})
export class CreateListComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

}
