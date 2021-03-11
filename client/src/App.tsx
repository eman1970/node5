import React from 'react';
import './shared/css/Global.css'
import { Routes } from './routes/Routes'
import { UserProvider } from './shared/provider/UserProvider'
import { Navigation } from './components/navigation/Navigation'
import {TestProvider} from './shared/provider/TestProvider';
 



function App() {
  return (
    
<TestProvider>
    <UserProvider>
      
      <Routes>

        <Navigation />


      </Routes>
    </UserProvider>
    </TestProvider>
  );
}

export default App;