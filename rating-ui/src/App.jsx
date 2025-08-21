import Rating from "./components/Rating";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Rating
        heading="How do you feel about React?"
        feedbackMessages={[
          "Hate it.",
          "Dislike it.",
          "Meh",
          "Like it.",
          "Love it.",
        ]}
      ></Rating>
    </div>
  );
};

export default App;
