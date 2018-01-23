import { Component, Input, OnChanges }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HeroService }            from '../hero.service'
import { Address, Hero, states } from '../data-model';

@Component({
  selector: 'app-hero-detail-reactive',
  templateUrl: './hero-detail-reactive.component.html',
  styleUrls: ['./hero-detail-reactive.component.css']
})
export class HeroDetailReactiveComponent implements OnChanges {
  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;
  nameChangeLog: string[] = [];

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
  ) {
    this.createForm();
    this.logNameChange();
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
    });
    this.setAddresses(this.hero.addresses);
  }

  revert() {
    this.ngOnChanges();
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: '',
    });
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair(i: number) {
    this.secretLairs.removeAt(i);
    this.heroForm.markAsDirty();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    console.log(saveHero);
    return saveHero;
  }


  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

}
