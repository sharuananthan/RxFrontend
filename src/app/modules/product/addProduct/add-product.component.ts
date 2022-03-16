import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  userForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required ],
      description:['', Validators.required ],
      logo:['', Validators.required ],
      webUrl:['', Validators.required ],
      redirectUrl:['', Validators.required ],
      key:['', Validators.required ],
      period:['', Validators.required ],

    })

    
    
  }

  get f() { return this.userForm.controls; }
}
