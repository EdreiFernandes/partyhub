import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeadsupDialog } from '../../../components/headsup-dialog/headsup-dialog';
import { HeadsupCard } from "../../../components/headsup-card/headsup-card";

@Component({
  selector: 'app-headsup',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, HeadsupCard],
  templateUrl: './headsup.html',
  styleUrl: './headsup.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Headsup {
  readonly name = signal('');
  readonly tip = signal('');
  readonly dialog = inject(MatDialog);
 
  openDialog(): void {
    const dialogRef = this.dialog.open(HeadsupDialog, {
      data: {name: this.name(), tip: this.tip()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.name.set(result.name);
        this.tip.set(result.tip);
      }
    });
  }
}