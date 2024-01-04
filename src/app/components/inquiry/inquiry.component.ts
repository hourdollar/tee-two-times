import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.scss'
})
export class InquiryComponent {

}
