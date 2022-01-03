export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light p-3">
        <div className="col h3">React</div>
      </div>

      {list.map((item) => (
        <div className="row">
          <div className="col-12 bg-secondary text-light p-3 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            consequuntur odio totam nulla qui velit ex laborum cupiditate
            ratione vel? Cumque optio nemo fugiat veritatis dolorum! Deleniti
            asperiores totam animi?
          </div>
        </div>
      ))}
    </div>
  );
}
