import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
       
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>an accessory is an item used to contribute, in a secondary manner, to an individual's outfit. Accessories are often chosen to complete an outfit and complement the wearer's look.[1] They have the capacity to further express an individual's identity and personality.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015__340.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>Beauty is the quality in someone or something that makes the thing more attractive and appealing to our eyes..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://cdn.pixabay.com/photo/2014/11/05/19/26/woman-518275__340.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>
          Jewelry helps in enhancing one's beauty. It also symbolizes wealth, power, and status. For some, jewelry is a form of art for self and creative expression.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;