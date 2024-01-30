import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import WrappedComponent from './components/render/WrapRender';

function App() {
  return (
    <div>
      <h3>HOC</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <div>
      <h3>Render</h3>
        <WrappedComponent render={(counter,handleCounter)=>{
          return <LikePost counter={counter} handleCounter={handleCounter}/>
        }}/>
         <WrappedComponent render={(counter,handleCounter)=>{
          return <LikeImage counter={counter} handleCounter={handleCounter}/>
        }}/>
      </div>
    </div>
  );
}

export default App;
