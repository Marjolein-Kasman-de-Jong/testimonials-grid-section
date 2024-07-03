//  Constants
import reviews from "./constants/reviews";

// Components
import Review from "./components/review/Review";

// Styles
import "./App.css";

function App() {
  return (
    <main className="grid">
      {
        reviews.map((review, index) => {
          return  <Review 
                    key={review.title} 
                    review={review} 
                    index={index} 
                  />;
        })
      }
    </main>
  );
}

export default App;