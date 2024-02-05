import {Component, Inject} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent, MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-word',
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
  templateUrl: './create-word.component.html',
  styleUrl: './create-word.component.css'
})
export class CreateWordComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateWordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
}
