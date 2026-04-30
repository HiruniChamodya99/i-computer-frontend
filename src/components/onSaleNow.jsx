import ProductCard from "./productCard";

export default function OnSaleNow(){

    return(
        <div className= "on-sale">
            <h1>On Sale Now!</h1>
            <ProductCard 
                  name="Mackbook"
                  image="https://picsum.photos/id/0/200/300"
                  price="$990"
            />
            <ProductCard
                  name="iphone"
                  image="https://picsum.photos/id/3/200/300"
                  price="$790"
            />
        </div>
    )
}