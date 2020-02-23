import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.headerForm = this.formBuilder.group({
      search: [""]
    });
  }

}
