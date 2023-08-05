import "./App.css";

let date= new Date().toLocaleDateString()
let time= new Date().toLocaleTimeString()
let hour= new Date().getHours()
let message=""
let styles={}
if (hour >= 1 && hour <= 11) {
  message = "Good Morning";
  styles.color = "yellow";
} else if (hour >= 12 && hour <= 19) {
  message = "Good Afternoon";
  styles.color = "skyblue";
} else {
  message = "Good Night";
  styles.color = "gray";
}
function App() {
  return (
    <>
      <div className="boxes">
        <div className="message-box">
          <h2>Time : {time} </h2>
          <h2>Date : {date}</h2>
        </div>
        <h1 style={styles}>{message}</h1>
      </div>
    </>
  );
}

export default App;
