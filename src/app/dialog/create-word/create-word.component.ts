import {Component, Inject} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogContent, MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

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
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
}
