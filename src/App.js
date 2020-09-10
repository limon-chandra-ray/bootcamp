import React, { Suspense } from 'react';
import FetchData from './component/FetchData';
import AllData from './component/AllData';
import MyFetch from './component/hookfetch/MyFetch';
import FetchList from './component/hookfetch/FetchList';


function App({names}) {
  const resorce = FetchData()
  const second_resorce = MyFetch()
  return (
    <div className="container">

        <h1>Data </h1>
        <Suspense fallback={<h1>Loading the page ......................................</h1>}>
          <h1>Fetch data</h1>
            <AllData pulldata={resorce}/>
            <Suspense fallback={<h1>Loading the page ......................................</h1>}>
 
              <FetchList pull= {second_resorce}/>
            
            </Suspense>
        </Suspense>
    </div>
  );
}

export default App;
