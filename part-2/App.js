function App() {
    return (
      <div>
        <Tweet
          name="Rylan"
          username="rybad614"
          date={new Date().toDateString()}
          message="This is it."
        />
        <Tweet
          name="Mya"
          username="mymy21"
          date={new Date().toDateString()}
          message="I can do all things!"
        />
        <Tweet
          name="Tyler"
          username="ty00"
          date={new Date().toDateString()}
          message="!!!"
        />
      </div>
    );
  }
  