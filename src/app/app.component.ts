import { Component, VERSION } from '@angular/core';
import { IProduct } from './IProduct';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Product APP' // + VERSION.major;
  

  getProducts(): IProduct[]{
      return 
            [
              {
                "productId": 1,
                "productName": "Brown eggs",
                "productCode": "Pro-1",
                "releaseDate": "March 31 2020",
                "price": 30,
                "description": "Raw organic brown eggs in a basket",
                "starRating": 4,
                "imageUrl": "assets/images/0.jpg"
                }
            ]
                  
      ;
      
  }

}
