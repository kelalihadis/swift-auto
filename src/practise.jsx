import { Card } from "react-bootstrap"

export default function Practise(){
    const products ={
        "productss": [
            {
              "id": 1,
              "name": "Jpan honda CL7 Bearing",
              "image": "https://picsum.photos/id//0/60",
              "production": "New product",
              "price": "1500",
              "quantity": "0",
              "catagory": "Tyres and Wheels",
              "brand": "Honda"
            },
            {
              "id": 2,
              "name": "Full Hd LCD",
              "image": "https://picsum.photos/id//1001/60",
              "production": "Old product",
              "price": "3300",
              "quantity": "5",
              "catagory": "Adio OR Video",
              "brand": "Honda"
            },
            {
              "id": 3,
              "name": "Rear LH Disc Breaker",
              "image": "https://picsum.photos/id//1011/60",
              "production": "New product",
              "price": "8000",
              "quantity": "8",
              "catagory": "breaks",
              "brand": "BMW"
            },
            {
              "id": 4,
              "name": "Jpan honda CL7 Bearing",
              "image": "https://picsum.photos/id//1013/60",
              "production": "New product",
              "price": "1500",
              "quantity": "10",
              "catagory": "Tyres and Wheels",
              "brand": "Honda"
            },
            {
              "id": 5,
              "name": "ear LH Disc Breaker",
              "image": "https://picsum.photos/id//1018/60",
              "production": "Old product",
              "price": "5000",
              "quantity": "2",
              "catagory": "Brakes",
              "brand": "Ferari"
            }
          ]
    }
    const num = '148.7770056789'
    return(

        <div>FROM PRACTISE  <br></br>
            <span>{num.split('.')[0]}</span> 
            <div className="product-list">
                {products.productss.map((prod)=>(<Card key={prod.id}>
                    <Card.Img variant="top" src={prod.image} style={{width:48}}/>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>{prod.production}</Card.Text>  
                               
                </Card>))}
            </div>
        </div>
    )
}