import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent, MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {WordCheckStatus} from "../../word-check-status";

@Component({
  selector: 'app-word-check',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './word-check.component.html',
  styleUrl: './word-check.component.css'
})
export class WordCheckComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: WordCheckStatus,
  ) { }
}
