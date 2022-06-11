# MotorcycleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development server

Below listed structures have been used in the development of this application:
####
* Component
* String interpolation, @Input(), ngIf,ngFor.
* Custom Directive
* Routing
* Service
* Subject
* Angular animation
* Reactive Form
* Model

## Usage

In this app, you can create a motorcycle list where you can monitor details of each motorcycle, edit / delete a motorcycle from the list. You can keep record of the prices of the motorcycles in price list. Price list can also be managed. 

When app runs first time, it starts with 2 records in the both motorcycle and price list.

![image](https://user-images.githubusercontent.com/71972947/173196793-9f688734-aef6-408f-b6b6-df7024eb86fc.png)

![image](https://user-images.githubusercontent.com/71972947/173196799-cde522ca-171c-4617-892d-06d39e02ecb6.png)

When click on an item in the motorcycle list, details is displayed.
![image](https://user-images.githubusercontent.com/71972947/173195723-7578c87c-c4fa-48fd-a492-ad1259ef46e1.png)

By Manage Motorcycle button, the record can be editted, deleted or its price can be added to price list.
If its price alread exists in the price list, it is not added. When editing the motorcycle, if its price is changed, it is also updated in price list. If a motorcycle is deleted, its price is also deleted from the price list.

Lets click on the Edit Motorcycle link under Manage Motorcycle button and change HorsePower to 60 and its price to 6500 EUR.
![image](https://user-images.githubusercontent.com/71972947/173196118-067f95f7-e69d-47d6-a2b4-2be8df7dffe9.png)

Now in detail screen HorsePower is monitored as 60 and price is 6500 EUR. Price List is also updated with new price of the motorcycle, which is 6500 EUR.
![image](https://user-images.githubusercontent.com/71972947/173196190-7cb6295f-4617-40a7-95d3-43b3a9b83115.png)

![image](https://user-images.githubusercontent.com/71972947/173196209-ab2c9a83-74d3-428d-835e-36233cc55b4f.png)

When deleting a motorcycle by Delete Motorcycle link under Manage Motorcycle button, its deleted from both lists.

![image](https://user-images.githubusercontent.com/71972947/173196323-0df4798f-8a42-4ec1-8053-f485c145a297.png)

![image](https://user-images.githubusercontent.com/71972947/173196373-2f32d5fa-95d3-47a3-9c97-36d7ae284779.png)

![image](https://user-images.githubusercontent.com/71972947/173196389-ebe32e4b-5124-458d-bbe5-25c950f8a3ab.png)

To add a new motorcycle to list, please click on New Motorcycle button. This will open a new form. There are validations in both edit or new motorcycle creating forms. All fields are required. Form can not be submitted unless the whole form is valid.
![image](https://user-images.githubusercontent.com/71972947/173196442-6fbdf7b4-08f0-4419-98c6-ae10359008b4.png)

Once created a new motorcycle, you can add its price to Price List by clicking To PRice List under Manage Motorcycle button in detail page.
![image](https://user-images.githubusercontent.com/71972947/173196541-9dcbd759-8265-447b-91f9-c49418aceb8d.png)

You can delete a price by clicking on any Delete button on the list. It will disaapear with an animation.
![image](https://user-images.githubusercontent.com/71972947/173196563-c9c109ba-2b97-4dc2-8196-eee79786c071.png)

If you type a page which does not exist in url, app is directed to not-found page.
![image](https://user-images.githubusercontent.com/71972947/173196678-a3f92171-47f5-4b3f-b9a8-f63568a0659e.png)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
