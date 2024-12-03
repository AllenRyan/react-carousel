import Carousel from "./components/carousle";



function App() {
  const images = [
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     ];
  const captions = [
    <div className="carousel-caption">
        <h1>Los Angeles</h1>
        <p>LA is always so much fun!</p>
      </div>,
      <div className="carousel-caption">
      <h1>Chicago</h1>
      <p>Thank you, Chicago!</p>
    </div>,
    <div className="carousel-caption">
    <h1>New York</h1>
    <p>We love the Big Apple!</p>
  </div>
  ]
  return(
    <Carousel images={images} captions = {captions} />
  )
}

export default App
