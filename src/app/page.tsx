import { Container, Filters } from "@/components/shared";
import { ProductCart } from "@/components/shared/product-cart";
import { ProductGroupList } from "@/components/shared/product-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      
      <TopBar/>

      <Container className='mt-10 pb-14'>
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters/>
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col "gap-16>
              <ProductGroupList
                title="Пиццы"
                items={[{
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 6,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                }
                ]}
                categoryId={0}
              />

              <ProductGroupList
                title="Комбо"
                items={[{
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 6,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                  price: 550,
                  items: [{price: 550}]
                }
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
