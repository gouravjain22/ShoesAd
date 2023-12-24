import './Shoes.css';
const Shoes = () => {
    return (
      <main className="hero container">
        <div className="text-content">
          <h1>Give Your Feet the Finest Comfort</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png" alt="amazon-logo" />
              <img src="https://stockarea.io/blogs/wp-content/uploads/2021/11/flipkart-logo-39906-1.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="shoe-image">
          <img src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png" alt="shoe" />
        </div>
      </main>
    );
  };
  
  export default Shoes;
  