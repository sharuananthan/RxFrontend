import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

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
