import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { GetAllLocationService } from 'src/app/core/services/get-all-location.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent {

  vehicleForm!: FormGroup;
  locationArr: any = [];

  constructor(private fb: FormBuilder, private vehicleService: VehicleService, private getAlllocationService: GetAllLocationService) {

  }

  ngOnInit() {
    this.getlocation();
    this.vehicleForm = this.fb.group({
      brand: ['', Validators.required],
      name: ['', Validators.required],
      pricingDescription: ['', Validators.required],
      pricing: [null, Validators.required],
      locationId: [null, Validators.required],
      registeredOn: [new Date().toISOString()],
      imageUrl: [''],
      vehicleNo: ['', Validators.required],
      ownerUserId: [0],
      zoomCarAccessoriess: this.fb.array([
        this.createAccessory() // one accessory by default
      ])
    });
  }

  createAccessory(): FormGroup {
    return this.fb.group({
      accessoriesId: [null],
      accessoriesTitle: ['', Validators.required],
      showOnWebsite: [true],
      carId: [null]
    });
  }

  get zoomCarAccessoriess(): FormArray {
    return this.vehicleForm.get('zoomCarAccessoriess') as FormArray;
  }

  addAccessory() {
    this.zoomCarAccessoriess.push(this.createAccessory());
  }

  getlocation() {
    this.getAlllocationService.getAllLocation().subscribe({
      next: (res: any) => {
        console.log("locations", res.data);
        this.locationArr = res.data;

      },
      error: (error: any) => {
        console.log("error", error);
      }
    })
  }

  get f() {
    return this.vehicleForm.controls;
  }

  onSubmit() {
    console.log(this.vehicleForm.value);
    const obj = this.vehicleForm.value;

    const params = {
      brand: obj?.brand,
      name: obj?.name,
      pricingDescription: obj?.pricingDescription,
      pricing: obj?.pricing,
      locationId: obj?.locationId,
      registeredOn: obj?.registeredOn,
      imageUrl: obj?.imageUrl,
      vehicleNo: obj?.vehicleNo,
      accessoriesTitle: obj?.accessoriesTitle,
      showOnWebsite: obj?.showOnWebsite,
    }

    this.vehicleService.addvehicle(params).subscribe({
      next: (res: any) => {
        console.log("veh data --", res.data);
        this.clear();
      },
      error: (error: any) => {

        console.log(error)
      }
    })
  }
  clear() {
    this.vehicleForm.reset();
  }
}




