import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
  name: string;
  tip: string;
}

@Component({
  selector: 'app-headsup-dialog',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose],
  templateUrl: './headsup-dialog.html',
  styleUrl: './headsup-dialog.css'
})
export class HeadsupDialog {
  readonly dialogRef = inject(MatDialogRef<HeadsupDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly model = model(this.data);

  onNoClick(): void {
    this.dialogRef.close();
  }
}