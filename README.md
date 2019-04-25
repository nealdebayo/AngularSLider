# AngularDualSlider
An angular slider that takes an array of elements and enables sliding for loading each array element's unique data

Go To Your Angular Project
###  `npm install --save @angular/cdk @angular/material`

###  `git clone https://github.com/exquisapp/AngularDualSlider.git`

In `app.module.ts` or any custom module
###  `import { AngularDualSliderModule } from '/directory-of-the-cloned-repo'`

###  Register module in the import array

Use Like this:
###  `<app-dual-slider [events]="SomeArray"></app-dual-slider>`

E.G.
### `<app-dual-slider [events]="[0,1,2,4,5]"></app-dual-slider>`

